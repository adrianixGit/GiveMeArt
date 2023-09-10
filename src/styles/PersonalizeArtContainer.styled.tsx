import styled from "styled-components";

export const StyledPersonalizeArtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 8px 22px -18px rgba(66, 68, 90, 1);
`;

export const StyledInput = styled.input`
  border: none;
  background-color: #f5f5f6;
  height: 100%;
  width: 85%;
  border-radius: 10px 0 0 10px;
  padding: 0 5px;
  outline: none;
  &::placeholder {
    color: #c0c1c9;
  }
`;

export const StyledButton = styled.button`
  height: 100%;
  width: 15%;
  background-color: #cb2b28;
  border: none;
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;

export const StyledOption = styled.div`
  background-color: #f5f5f6;
  padding: 10px;
  border-radius: 5px;
  p {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const StyledPersonalizer = styled.div`
  padding: 5px;
  background-color: #f5f5f6;
  width: 100%;
  border-radius: 5px;
  display: flex;
  box-shadow: 1px 8px 13px -9px rgba(66, 68, 90, 1);
`;

export const StyledStylePreview = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  justify-content: space-around;
  background-color: #f7f7f8;
  align-items: flex-start;
  p {
    font-size: 13px;
  }
`;

export const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledArrow = styled.div`
  justify-self: start;
  cursor: pointer;
`;

export const StyledQualityContainer = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  justify-content: space-around;

  align-items: flex-start;
  p {
    font-size: 13px;
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledQualityButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 13px;
  padding: 10px;
  width: 100%;
  &:last-child {
    font-weight: bold;
  }
  cursor: pointer;
  &:hover {
    background-color: #cb2b28;
    color: white;
    border-radius: 5px;
    box-shadow: inset 1px 8px 22px -18px rgba(66, 68, 90, 1);
  }
`;
