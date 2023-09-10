import { StyledHeader } from "../styles/Header.styled";
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={logo} />
      </div>
      <div>
        <p>
          Generate your ART by typing in field below any words that comes to
          your mind!
        </p>
      </div>
    </StyledHeader>
  );
};
