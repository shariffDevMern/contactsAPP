import styled from "styled-components";

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
