import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"; // to render components in a virtual DOM
import ContactForm from "./ContactForm"; // we need the component we are testing/rendering

// type into all four inputs
// click submit button
// assert that new user is in the list

test("Contact Form contains adds new contacts to the list", () => {
  render(<ContactForm />);
  // type into all four inputs
  // 1. Query for all inputs
  // 2. Run change event to add text
  const fnameInput = screen.getByLabelText(/firstname/i);
  const lnameInput = screen.getByLabelText(/lastname/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);

  // events with RTL
  fireEvent.change(fnameInput, { target: { value: "Mon" } });
  expect(fnameInput.value).toHaveLength(15);
  fireEvent.change(lnameInput, { target: { value: "Smith" } });
  fireEvent.change(emailInput, { target: { value: "monkeysmith@gmail.com" } });
  fireEvent.change(messageInput, { target: { value: "Test Message" } });
  // Click submit button
  // 1. Query for the button
  // 2. run the click event on the button
  // const submitButton = screen.getByTestId(/submit/i);

  // act(() => {
  //   fireEvent.click(submitButton);
  // });
  // Assert that my new contact is in the list
  // 1. Query for the new contact text
  // 2. assert that it is being rendered

  // const newContact = screen.getByText(/monkey/i);

  // click submit button
  // assert that new user is in the list
});
