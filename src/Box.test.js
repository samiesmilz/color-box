import { render, screen } from "@testing-library/react";
import Box from "./Box";

it("renders withou errors", () => {
  render(<Box />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
