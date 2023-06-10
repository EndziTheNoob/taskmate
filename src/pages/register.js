import {
  FormStyle,
  Label,
  InputStyle,
  ContainerStyle,
} from '@/styles/Register';

export default function () {
  return (
    <ContainerStyle>
      <FormStyle>
        <Label>Fill in your email address:</Label>
        <InputStyle type="text" placeholder="@gmail.com" required />
        <Label>Create your password:</Label>
        <InputStyle type="text" placeholder="********" required />
        <button>Submit</button>
      </FormStyle>
    </ContainerStyle>
  );
}
