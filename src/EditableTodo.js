import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * State
 * - isEditing
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo( {todo, update, remove} ) {
  const [isEditing, setIsEditing] = useState(false);
  console.log("Re-rendering. isEditing:", isEditing);

  /** Toggle if this is being edited */
  function toggleEdit() {
    // setIsEditing(b => !b); // TODO: Why doesn't this work?
    setIsEditing(!isEditing);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove();
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    toggleEdit();
    update(formData);
  }

  const todoFormComponent = (
    <TodoForm
      initialFormData={todo}
      handleSave={handleSave}
    />
  );

  // TODO: Mention we pulled these out of the return() and set them as vars
  // in order to make the return statement cleaner / simpler with a one-liner
  const todoComponent = (
    <div className="mb-3">
    <div className="float-end text-sm-end">
      <button
          className="EditableTodo-toggle btn-link btn btn-sm"
          onClick={toggleEdit}>
        Edit
      </button>
      <button
          className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
          onClick={handleDelete}>
        Del
      </button>
    </div>

    <Todo
      id={todo.id}
      title={todo.title}
      description={todo.description}
      priority={todo.priority}/>
  </div>
  )


  return (
      <div className="EditableTodo">
        { isEditing ? todoFormComponent : todoComponent }
      </div>
  );
}

export default EditableTodo;
