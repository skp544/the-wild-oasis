import styled from "styled-components";
import LogoLight from "../../data/img/logo-light.png";
import LogoDark from "../../data/img/logo-dark.png";
import { useDarkMode } from "../../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const Logo = () => {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? LogoDark : LogoLight;

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
};

export default Logo;
