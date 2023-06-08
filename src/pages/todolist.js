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
  AddButton,
  TaskmateTodo,
} from '../styles/Todolist.js';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

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
      <nav>
        <Menu />
      </nav>
      <Container>
        <InputContainer>
          <Input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter a new task"
            onKeyPress={handleKeyPress}
          />
        </InputContainer>
        <TaskList>
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
        </TaskList>
        <AddButton onClick={handleAddTask}>+</AddButton>
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
