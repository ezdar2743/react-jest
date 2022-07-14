import { render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", { name: "Change to Blue" });
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });
});

test("button change blue when clicked", () => {});
