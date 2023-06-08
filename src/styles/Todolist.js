import styled from 'styled-components';

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
  justify-content: space-between;
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
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})` appearance: none;
width: 1rem;
height: 1rem;
border: 1px solid #aaa;
border-radius: 100%;
margin-right: 0.8rem;
margin-left: -1rem;
background-color: white;
cursor: pointer;

&:checked {}
}

`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
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

  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const AddButton = styled.button`
  background-color: ${Palette.purple_light};
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  position: fixed;
  right: 2rem;
  bottom: 5rem;
  border: black solid 0.1rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 8px;
  width: 2.5rem;
  height: 2.5rem;

  &:hover {
    background-color: ${Palette.purple_light};
    transform: translateY(5px);
  }

  &:active {
    background-color: ${Palette.purple_light};
    transform: translateY(5px);
  }
`;

export const TaskmateTodo = styled.img`
  position: absolute;
  bottom: 3rem;
  left: 2rem;
`;
