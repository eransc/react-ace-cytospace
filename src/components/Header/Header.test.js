import React from "react";
import { render, cleanup } from "@testing-library/react";

import Header from "./Header";

afterEach(cleanup);

it("insert text into h1", () => {
  const { getByTestId, getByText } = render(<Header text="Hello" />);
  expect(getByTestId("h1tag")).toHaveTextContent("Hello");
  expect(getByText("Hello")).toHaveClass("fancy");
});
