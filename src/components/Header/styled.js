import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  padding-top: 2rem;
  padding-right: 2rem;
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
