import { render, screen, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders withou errors", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

const addNewBox = (width = 450, height = 250, color = "yellow") => {
  // Select input elements and the submit button
  const widthInput = screen.getByPlaceholderText("Enter width");
  const heightInput = screen.getByPlaceholderText("Enter height");
  const colorInput = screen.getByPlaceholderText("Enter color");
  const addBoxButton = screen.getByText("Add box");

  // Enter values in the input elements
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  fireEvent.change(colorInput, { target: { value: color } });

  // fire an event to submit
  fireEvent.click(addBoxButton);
};

it("Adds a new box on submit", () => {
  render(<BoxList />);
  // Check to make sure there are no boxes on the page.
  expect(screen.queryByText("❇️X")).not.toBeInTheDocument();

  // Add a new box and expect to see this text now.
  addNewBox();
  expect(screen.getByText("❇️X")).toBeInTheDocument();
});

it("can remove a box", () => {
  render(<BoxList />);
  addNewBox();
  const removeButton = screen.getByText("❇️X");
  fireEvent.click(removeButton);
  expect(screen.queryByText("❇️X")).not.toBeInTheDocument();
});
