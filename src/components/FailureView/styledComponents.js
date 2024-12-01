import styled from "styled-components";

export const ErrorMsgContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    `
export const ErrorMsg = styled.h1`
    color: #3f6252;
    
`

export const OptionButton = styled.button`
background-color: #284136;
  color: white;
  border-style: none;
  border-radius: 20px;

  padding: 10px;
  cursor: pointer;
  &:active {
    background-color: #43755d;
  }
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;