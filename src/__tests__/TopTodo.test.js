import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "../TopTodo";
import testTodos from "./__testCommon";

describe("top todo", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={testTodos}/>);
  });

  it("renders highest priority todo", function () {
    const {queryByText} = render(<TopTodo todos={testTodos}/>);
    expect(queryByText("Make dinner")).toBeInTheDocument();
  })

  it("doesn't render lower priority todos", function () {
    const {queryByText} = render(<TopTodo todos={testTodos}/>);
    expect(queryByText("Go to bed")).not.toBeInTheDocument();
    expect(queryByText("Code!")).not.toBeInTheDocument();
  })
});