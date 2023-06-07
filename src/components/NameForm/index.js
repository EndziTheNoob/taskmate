import { InputStyle, FormStyle, Label } from './styled';

export default function NameForm() {
  return (
    <FormStyle>
      <Label>Fill in your name or nickname:</Label>
      <InputStyle type="text" placeholder="ToDoElla..." />
    </FormStyle>
  );
}
