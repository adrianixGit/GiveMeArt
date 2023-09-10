import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  img {
    width: 23px;
    height: 23px;
    margin-left: 5px;
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }
  }
`;
