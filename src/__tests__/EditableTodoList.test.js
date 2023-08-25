import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "../EditableTodoList";

describe("editable todo list", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList />);
  });
});