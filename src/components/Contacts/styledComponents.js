import styled from "styled-components";

export const ContactsListSection = styled.div`
  display:flex;
  flex-direction:column;
  padding-left: 20px;
  height:100%;
  overflow-y:auto;
  padding-right: 20px;
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
  
  overflow-y: auto;
  
`;

export const NoMatchBg = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;

  svg {
    height: 100px;
    color: #3f6252;
    width: 100px;
  }
`;

export const EmptyText = styled.p`
  text-align: center;
  color: #3f6252;
  font-weight: bold;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;
export const SelectContactsBtn = styled.button`
  color: #3f6252;
  cursor: pointer;
  border-style: none;
  display: flex;
  background-color: transparent;
  gap: 5px;
  align-items: center;
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  svg {
    color: ${(props) => (props.isSelected ? "darkgray" : "")};
  }
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  border-style: none;
  cursor: pointer;

  svg {
    color: darkred;
  }
`;

export const NoContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NoContactText = styled.h1`
  font-size: 18px;
  color: #3f6252;
  display: flex;
  gap: 10px;
`;

export const AddContactBtn = styled.button`
  background-color: transparent;
  border: 1px solid #3f6252;
  color: #3f6252;
  display: flex;
  border-radius: 5px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const PopUpContainer = styled.div`
  background-color: #3f6243;
  text-align: center;
  color: #a6ffd5;
  padding: 20px;
  border-radius: 10px;
`;
export const AlertMessage = styled.p`
  line-height: 1.5;
`;

export const AlertBtnContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const AlertButton = styled.button`
  width: 70px;
  padding: 10px;
  color: ${(props) => (props.delete ? "white" : "#3f6243")};
  border-style: none;
  background-color: ${(props) => (props.delete ? "darkRed" : "#a6ffd5")};
  border-radius: 10px;
`;

export const ContactContainer = styled.div`
height:100vh;
    display:flex;
    
    flex-direction:column;
  `