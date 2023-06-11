import { TaskStyled, Checkbox, DeleteButton, EditButton } from './styled';
import { FaPen } from 'react-icons/fa';
import { useState } from 'react';

export default function Task({ task, onCheck, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleEditTask = (e) => {
    e.preventDefault();
    setIsEditing(false);
    onEdit(editTitle);
  };

  return (
    <TaskStyled>
      <Checkbox
        type="checkbox"
        checked={task.done}
        onChange={() => onCheck()}
      />
      {isEditing ? (
        <form onSubmit={handleEditTask}>
          <input
            type="text"
            name="title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
        </form>
      ) : (
        <span
          type="text"
          style={{
            textDecoration: task.done ? 'line-through' : 'none',
            color: task.done ? 'darkgray' : 'black',
          }}
        >
          {task.title}
        </span>
      )}
      <EditButton
        onClick={(e) => (isEditing ? handleEditTask(e) : setIsEditing(true))}
      >
        <FaPen />
      </EditButton>
      <DeleteButton onClick={() => onDelete()}>&#10005;</DeleteButton>
    </TaskStyled>
  );
}
