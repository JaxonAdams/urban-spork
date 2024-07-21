import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders App", () => {
  render(<App />);
});

test("renders the Header component", () => {
  render(<App />);
  const headerElement = screen.getByRole("banner");
  expect(headerElement).toBeInTheDocument();
});

test("renders the Home page initially", () => {
  render(<App />);
  const homePageElement = screen.getByTestId("home-page");
  expect(homePageElement).toBeInTheDocument();
});

test("renders the Footer component", () => {
  render(<App />);
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});

test("renders the LightDarkToggle component", () => {
  render(<App />);
  const toggleElement = screen.getByTestId("light-dark-toggle");
  expect(toggleElement).toBeInTheDocument();
});