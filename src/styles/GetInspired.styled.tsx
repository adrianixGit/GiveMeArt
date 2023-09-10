import styled from "styled-components";

export const StyledGetInspired = styled.div`
  width: 100%;
  background-color: #f7f7f8;
  padding: 15px 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const StyledInspiredHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    font-weight: 600;
    p {
      color: #cb2b28;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 8px 22px -18px rgba(66, 68, 90, 1);
  margin: 20px 0;
`;

export const StyledInput = styled.input`
  border: none;
  background-color: #e5e5e7;
  height: 100%;
  width: 75%;
  border-radius: 10px 0 0 10px;
  padding: 0 5px;
  outline: none;
`;

export const StyledButton = styled.button`
  height: 100%;
  width: 25%;
  font-weight: 200;
  background-color: #cfcfd0;
  border: none;
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledBuyButton = styled.button`
  padding: 10px 50px;
  background-color: #cb2b28;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  &:hover {
    box-shadow: inset 1px 8px 22px -18px rgba(66, 68, 90, 1);
  }
`;
