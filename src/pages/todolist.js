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
  PlusIcon,
  TaskListContainer,
  TaskCount,
  FilterBar,
  FilterButton,
  MoneyContainer,
  Money,
} from '../styles/Todolist.js';
import Head from 'next/head';
import { SaveTodos, LoadTodos, LoadDoneTodos } from '@/services/todos.js';
import Character from '@/components/Character/index';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskDone, setTaskDone] = useState(false);
  const [firstAnimationDone, setFirstAnimationDone] = useState(false);

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

    if (updatedTasks[index].done) setTaskDone(true);
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

                <DeleteButton onClick={() => handleDeleteTask(index)}>
                  &#10005;
                </DeleteButton>
              </Task>
            ))}
          </TaskListContainer>
          <MoneyContainer>
            <Money
              src="/img/money.png"
              alt="taskmate2"
              width={50}
              height={50}
            />
            <TaskCount>{`${doneCount}`}</TaskCount>
          </MoneyContainer>
        </TaskList>
        <Character
          type="morning"
          onAnimationComplete={() => setFirstAnimationDone(true)}
        />
        {firstAnimationDone && taskDone ? (
          <Character
            type="done"
            onAnimationComplete={() => setTaskDone(false)}
          />
        ) : null}
      </Container>
    </>
  );
}
