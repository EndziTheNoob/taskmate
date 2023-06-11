import { TaskStyled, Checkbox, DeleteButton, EditButton } from './styled';
import { FaPen } from 'react-icons/fa';

export default function Task({ task, onCheck, onDelete }) {
  return (
    <TaskStyled>
      <Checkbox
        type="checkbox"
        checked={task.done}
        onChange={() => onCheck()}
      />
      <span
        type="text"
        style={{
          textDecoration: task.done ? 'line-through' : 'none',
          color: task.done ? 'darkgray' : 'black',
        }}
      >
        {task.title}
      </span>
      <EditButton>
        <FaPen />
      </EditButton>
      <DeleteButton onClick={() => onDelete()}>&#10005;</DeleteButton>
    </TaskStyled>
  );
}
