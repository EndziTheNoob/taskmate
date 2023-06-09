import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const Palette = {
  purple_light: '#F4EDF9',
  gray_dark: '#666666',
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  height: 50%;
  width: 50%;
  max-width: 100%;
  margin-left: 25%;
  margin-right: 25%;
`;

export const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

export const Task = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${Palette.purple_light};
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

  div {
    display: flex;
    align-items: center;
    flex-grow: 1; /* Allow the content to grow and push the delete button to the end */
  }
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 1px solid #aaa;
  border-radius: 50%; /* Rounded shape */
  margin-right: 0.8rem;
  margin-left: -1rem;
  background-color: white;
  cursor: pointer;

  &:checked {
    background-color: ${Palette.gray_dark};
    border-color: ${Palette.purple_light};
  }
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-self: right;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  position: relative;
`;

export const Input = styled.input`
  padding: 10px;
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
  padding-left: 3rem;
  position: relative;

  &:focus {
    outline: none;
  }
`;

export const PlusIcon = styled(FaPlus)`
  position: absolute;
  left: 0.9rem;
  color: black;
  cursor: pointer;
  z-index: 1;
`;

export const TaskmateTodo = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 1;
`;
