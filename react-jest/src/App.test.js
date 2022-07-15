import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });
});

test("button change blue when clicked", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  //click
  fireEvent.click(colorBtn);

  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });
  expect(colorBtn.textContent).toBe("Change to red");
});

test("initial condition", () => {
  //check that the button starts out enabled
});
