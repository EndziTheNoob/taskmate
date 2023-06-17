import styled from 'styled-components';
import { Palette } from '../../styles/Palette';

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  padding-top: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  gap: 1rem;
  align-items: center;
  & > button {
    all: unset;
    &:hover {
      cursor: pointer;
    }
  }
  & > span {
    align-self: baseline;
    font-family: var(--font-mono);
  }
`;

export const DivLog = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-60%);
  color: #666666;
  padding: 4px;
  border-radius: 6px;
  margin-right: 1rem;
  margin-top: 0.7rem;
  margin-bottom: 2rem;
  background-color: ${Palette.purple_light};
  font-family: 'Krona One';
  font-size: 10px;
  padding: 0.5rem;
`;
