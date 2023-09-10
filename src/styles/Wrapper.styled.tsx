import { styled } from "styled-components";

export const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
  position: relative;
`;

export const BgCorner = styled.img`
  position: absolute;
  z-index: -1;
  top: -30px;
  right: 0;
`;
