import styled from 'styled-components';
import { Palette } from '../../styles/Palette';

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-self: right;
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
  margin-left: -1rem;
  background-color: ${Palette.white};
  cursor: pointer;
  flex-shrink: 0;

  &:checked {
    background-image: url('/img/tickgray.png');
    background-size: cover;
  }

  &:hover {
    background-image: url('/img/tickgray.png');
    background-size: cover;
  }
`;

export const TaskStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.color};
  padding: 10px;
  margin-bottom: 0.3rem;
  text-decoration: none;
  color: ${Palette.black};
  font-size: 0.8rem;
  padding: 0.5rem 2rem;
  border: black solid 0.1rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 8px;
  font-family: var(--font-todolist);
  gap: 0.8rem;

  span {
    flex-grow: 1;
    word-break: break-word;
  }

  &.currentItem {
    filter: brightness(70%);
  }
`;

export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-self: right;
`;

export const StyledForm = styled.form`
  flex-grow: 1;
`;

export const StyledInput = styled.input`
  width: 100%;
  background: ${Palette.white};
  border: none;
  padding: 2px;
  border-radius: 6px;

  &:focus {
    outline: none;
  }
`;
