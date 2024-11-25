import styled from "styled-components";

export const BgContainer = styled.div`
  background-color: #a6ffd5;
  height: 90vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  height: 10vh;

  svg {
    border-radius: 100%;
    color: #284136;
    height: 40px;
    width: 40px;

    &:active {
      background-color: #284136;
      color: white;
    }
  }
`;

export const MenuHeader = styled.h1`
  color: #3f6252;
`;
