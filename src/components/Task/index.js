import { TaskStyled, Checkbox, DeleteButton } from './styled';

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
      <DeleteButton onClick={() => onDelete()}>&#10005;</DeleteButton>
    </TaskStyled>
  );
}
