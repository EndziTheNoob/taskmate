import Menu from '../components/Menu/index.js';
import { useEffect, useState } from 'react';
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
  TaskCount,
  FilterBar,
  FilterButton,
} from '../styles/Todolist.js';
import Head from 'next/head';
import CharacterBubble from '../components/CharacterBubble/index.js';
import { SaveTodos, LoadTodos, LoadDoneTodos } from '@/services/todos.js';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    setTasks(LoadTodos());
  }, []);

  // počet hotových tasků
  const doneCount = tasks.filter((todo) => todo.done).length;

  // funkce basic todo list - přidávání a mazání tasků
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [{ title: newTask, done: false }, ...tasks];
      setTasks(updatedTasks);
      SaveTodos(updatedTasks);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    SaveTodos(updatedTasks);
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      done: !updatedTasks[index].done,
    };
    setTasks(updatedTasks);
    SaveTodos(updatedTasks);
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
        <FilterBar>
          <FilterButton onClick={() => setTasks(LoadTodos())}>All</FilterButton>
          <FilterButton onClick={() => setTasks(LoadDoneTodos())}>
            Done
          </FilterButton>
        </FilterBar>
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
          <TaskCount>{`${doneCount} task(s) done`}</TaskCount>
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
