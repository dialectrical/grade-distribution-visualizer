import styled from "styled-components";

export const StyledTextInput = styled.input`
  height: 5vh;
  width: 5vw;
  border: #efefed;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  background-color: #eff7ff;
`;

export const StyledInputLabel = styled.span`
  height: 5vh;
  width: 5vw;
  font-size: 18px;
  margin-left: 12.5%;
  font-weight: bold;
  text-align: left;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 5vh;
  width: 10vw;
  margin: auto;
  margin-top: 18px;
  margin-bottom: 18px;
  border: solid;
  border-color: #efefed;
`;
