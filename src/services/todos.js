export function SaveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function LoadTodos() {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
}

export function LoadDoneTodos() {
  return LoadTodos().filter((todo) => todo.done);
}
