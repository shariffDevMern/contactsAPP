import styled from "styled-components";

export const KeypadSectionBg = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const FooterContainer = styled.div``;

export const KeypadContainer = styled.div`
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: #598c73;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NumberInput = styled.input`
  color: white;
  margin-left:40px;
  border-style:none;
  background-color: transparent;
  width:200px;
  outline: none;
  text-align: center;
  font-size: 28px;
  padding: 10px;
`;

export const Dialer = styled.div`
  width: 300px;
    
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

  @media (min-width: 400px) {
    width: 350px;
  }
`;

export const DialerButton = styled.button`
  background-color: #3f6252;
  border-style: none;
  color: white;
  display: flex;
  justify-content: center;
  height: 70px;
  width: 70px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 100%;
  align-items: center;
  opacity: 0.9;

  &:active {
    opacity: 1;
  }

  @media (min-width: 400px) {
    height: 100px;
    width: 100px;
  }
`;

export const NumberContainer = styled.div`
display:flex;
gap:10px;

`;

export const EraseButton = styled.button`
background-color:transparent;
border-style:none;
margin-left:auto;
    svg{
    height:30px;
    width:30px;
    color:#a6ffd5;
    }
    
    
`