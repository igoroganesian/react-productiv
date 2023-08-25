import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - removeThis(): fn to call to remove a todo
 *
 * State
 * - isEditing
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, removeThis }) {
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(b => !b);
  }

  /** Call removeThis fn passed to this. */
  function handleDelete() {
    removeThis();
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update(formData);
    //TODO: readme > updateTodo etc.
    toggleEdit();
  }

  const todoFormComponent = (
    <TodoForm
      initialFormData={todo}
      handleSave={handleSave}
    />
  );

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
        todo={todo} />
    </div>
  );

  return (
    <div className="EditableTodo">
      {isEditing ? todoFormComponent : todoComponent}
    </div>
  );
}

export default EditableTodo;
