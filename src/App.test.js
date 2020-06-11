import React from "react";
import { render, screen } from "@testing-library/react"; // to render components in a virtual DOM
import App from "./App"; // we need the component we are testing/rendering

// we need jest global functions to write out tests
// Global Functions to Run -
// test() // used to run a test

test("renders App without crashing", () => {
  // Jest is going to be our test runner - Jest is a command line interface and will power our test runner
  // Tests will fail if an error is thrown from any function/component
  // inside the test callback

  render(<App />);
});

// query the virtual DOM for an element and makethem an "assertion" about that element

test("App renders the Contact Form Header", () => {
  // Arrange
  render(<App />);

  // Act
  // query for the contact form
  const header = screen.getByText(/contact form/i);

  // Assert
  // make an assertion (using Jest global functions)
  expect(header).toBeInTheDocument();
});
