import React from "react";

import { screen, render } from "@testing-library/react";

import App from "@/App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("App renders correctly", () => {
    screen.debug();
    expect(screen.findAllByAltText("logo")).toHaveLength(1);
  });
});
