import styled from "styled-components";

export const ContactItem = styled.li``;

export const Letter = styled.p`
  color: #3f6252;
  font-weight: bold;
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
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
  color: #3f6252;
`;
