import { StyledTodoForm } from './styled';

export default function Tasks({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
}
