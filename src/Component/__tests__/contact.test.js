import Contact from "../../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load contact us componet", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load button inside  contact componet", () => {
  render(<Contact />);
  const button = screen.getByText("submit");
  expect(button).toBeInTheDocument();
});
