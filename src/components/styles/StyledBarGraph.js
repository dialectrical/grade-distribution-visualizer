import styled from "styled-components";

export const StyledBarGraph = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fafafa;
  border: 1px solid #efefed;
  border-radius: 7px;
  color: #222222;
  margin: auto;
  width: 90vw;
  height: 24vw;
  text-align: center;
  align-items: flex-end;
`;

export const StyledBar = styled.div`
  height: 50%;
  width: 7%;
  background-color: #ff5700;
`;
