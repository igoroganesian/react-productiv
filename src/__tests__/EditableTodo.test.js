import React from "react";
import { fireEvent, render } from "@testing-library/react";
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

  // test that if isEditing is true, renders the form

  it("testing that edit shows form with correct data", function () {
    const { container, queryByText, debug } = render(<EditableTodo todo={testTodos[0]}
      update={update}
      removeThis={remove} />);

    const editBtn = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editBtn);

    debug(container);

    // Go button exists
    expect(container.querySelector('.NewTodoForm-addBtn')).toBeInTheDocument();

    // Value of newTodo-title is 'Code!'
    expect(
      container.querySelector(`input[value="Code!"]`)
    ).toBeInTheDocument();

    // Value of newTodo-description is 'Write some code'
    expect(queryByText("Write some code")).toBeInTheDocument();

    // Value of priority selector is 2
    const prioritySelector = container.querySelector('#newTodo-priority');
    expect(prioritySelector.options.selectedIndex).toEqual(1)
  });


});