import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import FilterTodos from "./FilterTodos";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({initialTodos}) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    let newTodoWithId = { ...newTodo, id: uuid() };
    setTodos(todos => [...todos, newTodoWithId]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(
      todos => todos.map(
        todo => todo.id === updatedTodo.id ? updatedTodo : todo
      )
    )

    // setTodos(todos => {
    //   const updatedTodos = todos.map(todo => {
    //     return todo.id === updatedTodo.id ? updatedTodo : todo;
    //   });
    //   return updatedTodos;
    // })
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  const editableTodoListComponent =
    <EditableTodoList todos={todos} update={update} remove={remove}/>

  const noTodos = <span className="text-muted">You have no todos.</span>

  const topTodoSection = (
    <section className="mb-4">
      <h3>Top Todo</h3>
      <TopTodo todos={todos}/>
    </section>
  )

  // filter function to get top todo
  function getTopTodo(todos) {
    return todos.reduce(
      (acc, cur) => (
        cur.priority < acc.priority ? cur : acc, todos[0]
      )
    );
  }

  // more flexible version of TopTodo
  const topTodoSectionViaFilter = (
    <section className="mb-4">
      <h3>Top Todo</h3>
      <FilterTodos todos={todos} filterFunction={getTopTodo}/>
    </section>
  )

  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
             { todos.length === 0 ? noTodos : editableTodoListComponent}
          </div>

          <div className="col-md-6">
            { todos.length === 0 ? null : topTodoSection}
            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm handleSave={create}/>
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;


