import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "../EditableTodo";
import testTodos, { create, update, remove } from "./__testCommon";


describe("editable todo", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={testTodos[0]}
      update={update}
      removeThis={remove} />);
  });


  it("renders correctly", function () {
    const { container, queryByText } = render(<EditableTodo todo={testTodos[0]}
      update={update}
      removeThis={remove} />);

    const delBtn = container.querySelector(".EditableTodo-delBtn");
    const editBtn = container.querySelector(".EditableTodo-toggle");

    expect(queryByText("Code!")).toBeInTheDocument();
    expect(delBtn).toBeInTheDocument();
    expect(editBtn).toBeInTheDocument();
  });
});