import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "../TodoApp";

describe("todo app", function () {
  it("renders without crashing", function () {
    render(<TodoApp />);
  });
});