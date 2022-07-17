import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpace } from "./App";
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
  render(<App />);

  //check that the button starts out enabled
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });

  expect(colorBtn).toBeEnabled();
  //check box
  const checkbox = screen.getByRole("checkbox");

  expect(checkbox).not.toBeChecked();
});

test("Check box disables button on first click and enables on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "disabled button" });
  const button = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("Checkbox is gray when disabled", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "disabled button" });
  const button = screen.getByRole("button");
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no innder capital letters", () => {
    expect(replaceCamelWithSpace("Red")).toBe("Red");
  });
  test("Work for one inner capital letters ", () => {
    expect(replaceCamelWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpace("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
