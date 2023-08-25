const testTodos =
  [
    {
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    },
    {
      id: 2,
      title: "Make dinner",
      description: "Cook something healthy",
      priority: 1,
    },
    {
      id: 3,
      title: "Go to bed",
      description: "In bed by 11:15",
      priority: 3,
    }
  ];

function create(newTodo) {
  const newTodoWithId = { ...newTodo, id: uuid() };
  setTodos(todos => [...todos, newTodoWithId]);
}

function update(updatedTodo) {
  setTodos(
    todos => todos.map(
      todo => todo.id === updatedTodo.id ? updatedTodo : todo
    )
  );
}

function remove(id) {
  setTodos(todos => todos.filter(todo => todo.id !== id));
}

export default testTodos;
export { create, update, remove };