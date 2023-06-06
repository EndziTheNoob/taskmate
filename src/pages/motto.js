import styled from 'styled-components';
import Menu from '../components/Menu/index.js';

export const Heading = styled.h1`
  color: blue;
`;

export default function Motto() {
  return (
    <div>
      <nav>
        <Menu />
      </nav>
      <Heading>Zkouším styled component</Heading>
    </div>
  );
}
