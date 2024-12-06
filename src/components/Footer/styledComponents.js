import styled from "styled-components";

export const FooterBg = styled.div`
  background-color: #598c73;
  padding: 15px;
  margin-top: auto;
  display: flex;
  justify-content: space-around;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
`;

export const IconContainer = styled.div`
  svg {
    color: ${(props) => (props.isActive ? "#a6ffd5" : "#233b2f")};
    height: 25px;
    width: 25px;
  }
`;
