import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  padding: 5px;
  border-radius: 10px;
  align-items: center;
  background-color: ${(props) => (props.bgColor ? "#3f6252" : "")};
  gap: 20px;
  svg {
    margin-left: auto;
    margin-right: 20px;
  }
  a {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
`;
export const Profile = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  color: white;
`;

export const ContactName = styled.p`
  color: ${(props) => (props.bgColor ? "#a6ffd5" : "#3f6252")};
  span {
    font-size: 10px;
  }
`;
