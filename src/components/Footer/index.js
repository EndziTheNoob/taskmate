import styled from 'styled-components';

export const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b6acbd;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0;
  height: 3rem;
  text-align: center;
  padding: 0;
`;

export const FooterP = styled.p`
  color: rgb(77, 77, 77);
  font-size: 0.8rem;
  font-family: 'Krona One', sans-serif;
`;

export default function Footer() {
  return (
    <>
      <FooterStyle>
        <FooterP>Angie & Andy 2023</FooterP>
      </FooterStyle>
    </>
  );
}
