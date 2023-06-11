import { useEffect, useState } from 'react';
import {
  Container,
  TaskList,
  Input,
  InputContainer,
  PlusIcon,
  TaskListContainer,
  TaskCount,
  FilterBar,
  FilterButton,
  MoneyContainer,
  Money,
} from '@/styles/Todolist';
import Head from 'next/head';
import {
  LoadTodos,
  AddTodo,
  DeleteTodo,
  ToggleTodo,
  EditTodo,
  LoadDoneTodos,
} from '@/services/todos';
import Character from '@/components/Character';
import Task from '@/components/Task';
import Header from '@/components/Header';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskDone, setTaskDone] = useState(false);
  const [firstAnimationDone, setFirstAnimationDone] = useState(false);
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    LoadTodos().then((todos) => setTasks(todos));
  }, []);

  // počet hotových tasků
  const doneCount = tasks.filter((todo) => todo.done).length;

  // funkce basic todo list - přidávání a mazání tasků
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      AddTodo(newTask).then((todo) => {
        if (!todo) return;
        const updatedTasks = [todo, ...tasks];
        setTasks(updatedTasks);
      });

      setNewTask('');
    }
  };

  const handleDeleteTask = (index, id) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    DeleteTodo(id);
  };

  const handleToggleTask = (index, id) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      done: !updatedTasks[index].done,
    };
    setTasks(updatedTasks);
    ToggleTodo(id, updatedTasks[index].done);

    if (updatedTasks[index].done) setTaskCount(taskCount + 1);

    if (taskCount === 4) {
      setTaskDone(true);
      setTaskCount(0);
    }
  };

  const handleEditTask = (index, newTitle, id) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      title: newTitle,
    };
    setTasks(updatedTasks);
    EditTodo(id, newTitle);
  };

  return (
    <>
      <Head>
        <title>To-Do List</title>
      </Head>
      <Header />
      <Container>
        <FilterBar>
          <FilterButton
            onClick={() => LoadTodos().then((todos) => setTasks(todos))}
          >
            All
          </FilterButton>
          <FilterButton
            onClick={() => LoadDoneTodos().then((todos) => setTasks(todos))}
          >
            Done
          </FilterButton>
        </FilterBar>
        <InputContainer onSubmit={handleAddTask}>
          <PlusIcon onClick={handleAddTask} />
          <Input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter a new task"
          />
        </InputContainer>
        <TaskList>
          <TaskListContainer>
            {tasks.map((task, index) => (
              <Task
                key={index}
                task={task}
                onCheck={() => handleToggleTask(index, task.id)}
                onDelete={() => handleDeleteTask(index, task.id)}
                onEdit={(newTitle) => handleEditTask(index, newTitle, task.id)}
              />
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
