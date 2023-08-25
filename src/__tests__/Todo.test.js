import React from "react";
import { render } from "@testing-library/react";
import Todo from "../Todo";
import testTodos from "./__testCommon";

describe("todo", function () {
  it("renders without crashing", function () {
    render(<Todo todo={testTodos[0]}/>);
  });

  it("renders correctly", function () {
    const {queryByText} = render(<Todo todo={testTodos[0]}/>);
    expect(queryByText("Code!")).toBeInTheDocument();
  })
});