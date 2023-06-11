import {
  TaskStyled,
  Checkbox,
  DeleteButton,
  EditButton,
  StyledForm,
  StyledInput,
} from './styled';
import { FaPen } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Palette } from '../ChangeTemplate';
import { LoadUserProfile } from '@/services/user';

export default function Task({ task, onCheck, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [color, setColor] = useState(Palette[0]);

  const handleEditTask = (e) => {
    e.preventDefault();
    setIsEditing(false);
    onEdit(editTitle);
  };

  useEffect(() => {
    LoadUserProfile().then((profile) => {
      if (profile !== null) setColor(profile.color);
    });
  }, []);

  return (
    <TaskStyled color={color}>
      <Checkbox
        type="checkbox"
        checked={task.done}
        onChange={() => onCheck()}
      />
      {isEditing ? (
        <StyledForm onSubmit={handleEditTask}>
          <StyledInput
            type="text"
            name="title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
        </StyledForm>
      ) : (
        <span
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
