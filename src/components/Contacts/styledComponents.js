import styled from "styled-components";

export const ContactsListSection = styled.div`
  height: 83vh;
  padding-left: 10px;
  padding-right: 10px;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;

  border-radius: 10px;

  background-color: #3f6252;
  &:hover {
    box-shadow: 0px 14px 25px #6fbd98;
  }

  svg {
    padding-right: 10px;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  flex-grow: 1;
  padding: 10px;

  border-style: none;
  outline: none;
  color: white;
`;

export const ContactsListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  height: 73vh;
`;
