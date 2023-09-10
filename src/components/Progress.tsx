import { StyledProgress } from "../styles/Progress.styled";
import {
  StyledProgressSquare,
  StyledProgressSquareContainer,
} from "../styles/Progress.styled";

export const Progress = () => {
  return (
    <StyledProgress>
      <StyledProgressSquareContainer>
        <StyledProgressSquare isActive={true}>
          <span>1</span>
        </StyledProgressSquare>
        <p>Generate Image</p>
      </StyledProgressSquareContainer>
      <StyledProgressSquareContainer>
        <StyledProgressSquare>
          <span>2</span>
        </StyledProgressSquare>
        <p>Choose your product</p>
      </StyledProgressSquareContainer>
      <StyledProgressSquareContainer>
        <StyledProgressSquare>
          <span>3</span>
        </StyledProgressSquare>
        <p>Order</p>
      </StyledProgressSquareContainer>
    </StyledProgress>
  );
};
