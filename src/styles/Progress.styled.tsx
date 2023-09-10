import styled from "styled-components";

type StyledSquarePropTypes = {
  isActive?: boolean;
};

export const StyledProgress = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      to right,
      #cb2b28 0%,
      #cb2b28 33%,
      #f5f5f6 33%,
      #f5f5f6 66%,
      #f5f5f6 66%,
      #f5f5f6 100%
    );

    top: 9px;
    border-radius: 10px;
  }
`;

export const StyledProgressSquare = styled.div<StyledSquarePropTypes>`
  width: 24px;
  height: 23px;
  border-radius: 20%;
  background-color: ${({ isActive }) => (isActive ? "#cb2b28" : "#f5f5f6")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9d9b9b;
`;

export const StyledProgressSquareContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  p {
    font-size: 14px;
    color: #d7d4d4;
  }
`;
