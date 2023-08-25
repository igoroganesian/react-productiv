import React from "react";

import Todo from "./Todo";

/** Filters a list of Todos and displays them.
 *
 * Props:
 * - todos
 * - filterFunction
 *
 * TodoApp -> FilterTodos
 */

function FilterTodos({ todos, filterFunction }) {
  const filteredTodos = filterFunction(todos)

  return (
    <div className="FilteredTodos">
      {filteredTodos.map(todo => (
        <Todo
        id={todo.id}
        title={todo.title}
        description={todo.description}
        priority={todo.priority} />
      ))}
    </div>
  )
}

export default FilterTodos;