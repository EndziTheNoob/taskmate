import { useState } from 'react';
import styles from '@/styles/Index.module.css';
import Menu from '../components/Menu/index.js';
import Image from 'next/image';
import TodoForm from '../components/TodoForm/index.js';
import Tasks from '../components/Tasks/index.js';

export default function Todolist() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className={styles.setting}>
      <nav className={styles.hamburgerMenu}>
        <Menu />
      </nav>

      <TodoForm addTodo={addTodo} />
      <Tasks todos={todos} deleteTodo={deleteTodo} />

      <Image
        src="/Taskmate_Mrk.gif"
        alt="taskmate2"
        className={styles.taskmateTodo}
        width={300}
        height={300}
        priority
      />
    </div>
  );
}
