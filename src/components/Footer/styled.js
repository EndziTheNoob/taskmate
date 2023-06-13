import styled from 'styled-components';
import { Palette } from '../../styles/palette';

export const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Palette.purple_dark};
  width: 100%;
  height: 3rem;
  text-align: center;
  position: absolute;
  bottom: 0;

  & > p {
    color: ${Palette.gray_dark};
    font-size: 0.8rem;
    font-family: 'Krona One', sans-serif;
  }
`;
