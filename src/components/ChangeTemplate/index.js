import { Container } from './styled';
import { Circle1, Circle2, Circle3, Colors } from './styled';

export default function Template() {
  return (
    <Container>
      <p>Pick color for your list:</p>
      <Colors>
        <Circle1/>
        <Circle2 />
        <Circle3 />
      </Colors>
    </Container>
  );
}
