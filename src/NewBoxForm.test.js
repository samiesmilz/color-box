import { render, screen } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders withou errors", () => {
  render(<NewBoxForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
