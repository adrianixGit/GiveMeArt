import {
  StyledGetInspired,
  StyledInspiredHeader,
  StyledButton,
  StyledInput,
  StyledInputContainer,
  StyledBuyButton,
} from "../styles/GetInspired.styled";
import seeMoreArrow from "../assets/seeMoreArrow.svg";
import inspiredIcon from "../assets/inspiredIcon.svg";

export const GetInspired = () => {
  return (
    <StyledGetInspired>
      <StyledInspiredHeader>
        <h2>
          <p>GET INSPIRED!</p>
          BEST USERS DESIGNS
        </h2>
        <a href="">
          See more
          <img src={seeMoreArrow} />
        </a>
      </StyledInspiredHeader>
      <img src={inspiredIcon} />
      <StyledInputContainer>
        <StyledInput type="text" />
        <StyledButton>ARTISTIC</StyledButton>
      </StyledInputContainer>
      <StyledBuyButton>BUY</StyledBuyButton>
    </StyledGetInspired>
  );
};
