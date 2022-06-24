import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("When checked check box, btn will can't able", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox");
  const btn = screen.getByRole("button");
  fireEvent.click(checkBox);
  expect(btn).toBeDisabled();
  fireEvent.click(checkBox);
  expect(btn).toBeEnabled();
});
