import { useState } from 'react';
import { StyledTodoForm } from './styled';

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText('');
  };
  return (
    <StyledTodoForm onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Todo..."
      />
    </StyledTodoForm>
  );
}
