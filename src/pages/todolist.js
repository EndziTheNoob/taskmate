import Menu from '../components/Menu/index.js';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  height: 50%;
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const Task = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f4edf9;
  padding: 10px;
  padding: 10px;
  margin-bottom: 0.3rem;
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  padding: 0.5rem 2rem;
  border: black solid 0.1rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 8px;
  font-family: var(--font-todolist);
  height: 2rem;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 10px;
  margin-left: 1rem;
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  background-color: white;
  padding: 0.5rem 2rem;
  border: black solid 0.1rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 8px;
  font-family: var(--font-todolist);
  width: 100%;
  height: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const AddButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
`;

const TaskmateTodo = styled.img`
  position: absolute;
  bottom: 3rem;
  left: 2rem;
`;

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
          <AddButton onClick={handleAddTask}>+</AddButton>
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
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleToggleTask(index)}
                />
                <span
                  style={{
                    textDecoration: task.done ? 'line-through' : 'none',
                    color: task.done ? 'gray' : 'black',
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
