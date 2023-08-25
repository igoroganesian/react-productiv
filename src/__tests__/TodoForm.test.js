import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "../TodoForm";

describe("todo form", function () {
  it("renders without crashing", function () {
    render(<TodoForm />);
  });
});