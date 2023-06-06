import { StyledTasks } from './styled';

export default function Tasks({ todos }) {
  return (
    <StyledTasks>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </StyledTasks>
  );
}
