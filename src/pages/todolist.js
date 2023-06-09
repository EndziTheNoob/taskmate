import Menu from '../components/Menu/index.js';
import { useState } from 'react';
import {
  Container,
  TaskList,
  Task,
  Checkbox,
  DeleteButton,
  Input,
  InputContainer,
  TaskmateTodo,
  PlusIcon,
  TaskListContainer,
} from '../styles/Todolist.js';
import Head from 'next/head';
import CharacterBubble from '../components/CharacterBubble/index.js';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // funkce basic todo list - přidávání a mazání tasků
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([{ title: newTask, done: false }, ...tasks]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      done: !updatedTasks[index].done,
    };
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <>
      <Head>
        <title>To-Do List</title>
      </Head>
      <nav>
        <Menu />
      </nav>
      <Container>
        <InputContainer>
          <PlusIcon onClick={handleAddTask} />
          <Input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter a new task"
            onKeyPress={handleKeyPress}
          />
        </InputContainer>
        <TaskList>
          <TaskListContainer>
            {tasks.map((task, index) => (
              <Task key={index}>
                <div>
                  <Checkbox
                    type="checkbox"
                    checked={task.done}
                    onChange={() => handleToggleTask(index)}
                  />
                  <span
                    style={{
                      textDecoration: task.done ? 'line-through' : 'none',
                      color: task.done ? 'darkgray' : 'black',
                    }}
                  >
                    {task.title}
                  </span>
                </div>
                <DeleteButton onClick={() => handleDeleteTask(index)}>
                  &#10005;
                </DeleteButton>
              </Task>
            ))}
          </TaskListContainer>
        </TaskList>
        <CharacterBubble />
        <TaskmateTodo
          src="/img/Taskmate_Kafe.gif"
          alt="taskmate2"
          width={300}
          height={300}
        />
      </Container>
    </>
  );
}
