import styled from "styled-components";

export const ProfileBackground = styled.div`
  background-image: linear-gradient(to bottom, white, #3f6252);
  height: 40vh;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  svg {
    color: #3f6252;
    height: 70%;
    width: 70%;
    max-height: 250px;
    max-width: 250px;
    align-self: center;
  }
`;

export const CancelBtn = styled.button`
  background-color: #284136;
  color: white;
  border-style: none;
  border-radius: 20px;

  padding: 10px;
  cursor: pointer;
  &:active {
    background-color: #43755d;
  }
`;

export const Name = styled.h1`
  margin-top: 0px;
  text-align: center;
  color: white;
`;

export const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Input = styled.input`
  background-color: #3f6252;
  border-radius: 10px;
  flex-grow: 1;
  padding: 10px;

  border-style: none;
  outline: none;
  color: white;
`;
export const AddBtn = styled(CancelBtn)`
  margin-top: 20px;
`;

export const ContactAddedViewBg = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const TickContainer = styled.div`
  border: 3px solid #3f6252;
  height: 50px;
  color: #3f6252;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  svg {
    height: 30px;
    width: 30px;
  }
`;

export const AddedMsg = styled.h1`
  color: #3f6252;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const OptionButton = styled(CancelBtn)`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
