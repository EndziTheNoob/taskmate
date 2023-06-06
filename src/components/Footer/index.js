import styled from "styled-components";

// v samostatném souboru Palette.js (nebo Colors, Theme, ...)
// názvy dle svých preferencí :)
const Palette = {
  purple_light: "#b6acbd",
  gray_dark: "#666666",
};

// styly by měly být v samostatném souboru, např. "index.styled.js"
// pokud v samostatném souboru nejsou, nemusíte je exportovat
const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.$hasPurpleBackground ? Palette.purple_light : "white"};
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
    // font-family si nastavte v globálních stylech klidně pro body nebo všechny p a span
    font-family: "Krona One", sans-serif;
  }
`;

export default function Footer() {
  const hasPurpleBackgroundColor = () => {
    // some conditions
    return false;
  };

  return (
    <>
      <FooterStyle $hasPurpleBackground={hasPurpleBackgroundColor()}>
        <p>Angie & Andy 2023</p>
      </FooterStyle>
    </>
  );
}
