import {
  StyledPersonalizeArtContainer,
  StyledInput,
  StyledInputContainer,
  StyledButton,
  StyledOption,
  StyledOptionsContainer,
  StyledPersonalizer,
  StyledStylePreview,
  StyledIconContainer,
  StyledArrow,
  StyledQualityContainer,
  StyledQualityButton,
  StyledButtonsContainer,
} from "../styles/PersonalizeArtContainer.styled";
import pen from "../assets/pen.svg";
import icon from "../assets/icon.png";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import padlock from "../assets/padlock.svg";

export const PersonalizeArtContainer = () => {
  return (
    <StyledPersonalizeArtContainer>
      <StyledInputContainer>
        <StyledInput type="text" placeholder="What do you want to create?" />
        <StyledButton>
          <img src={pen} />
        </StyledButton>
      </StyledInputContainer>
      <StyledOptionsContainer>
        <StyledOption>
          <p>Hight Quality</p>
        </StyledOption>
        <StyledOption>
          <p>Pop Art</p>
        </StyledOption>
        <StyledOption>
          <p>Realistic Look</p>
        </StyledOption>
      </StyledOptionsContainer>
      <StyledPersonalizer>
        <StyledStylePreview>
          <StyledArrow>
            <img src={leftArrow} />
          </StyledArrow>

          <StyledIconContainer>
            <p>Style preview</p>
            <img src={icon} />
          </StyledIconContainer>
        </StyledStylePreview>
        <StyledQualityContainer>
          <StyledButtonsContainer>
            <StyledQualityButton>MINIMALISTIC</StyledQualityButton>
            <StyledQualityButton>CARTOON</StyledQualityButton>
            <StyledQualityButton>
              <img src={padlock} />
              ARTISTIC
            </StyledQualityButton>
          </StyledButtonsContainer>
          <StyledArrow>
            <img src={rightArrow} />
          </StyledArrow>
        </StyledQualityContainer>
      </StyledPersonalizer>
    </StyledPersonalizeArtContainer>
  );
};
