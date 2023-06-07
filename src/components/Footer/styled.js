import styled from 'styled-components';

const Palette = {
  purple_light: '#b6acbd',
  gray_dark: '#666666',
};

export const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Palette.purple_light};
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0;
  height: 3rem;
  text-align: center;
  padding: 0;

  & > p {
    color: ${Palette.gray_dark};
    font-size: 0.8rem;
    font-family: 'Krona One', sans-serif;
  }
`;
