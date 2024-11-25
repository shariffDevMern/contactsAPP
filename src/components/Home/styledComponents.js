import styled from "styled-components";

export const HomeBg = styled.div`
  background-color: #a6ffd5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderSection = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ContactHeading = styled.h1`
  color: #3f6252;
  font-size: 52px;
  margin: 0px;
`;
export const PhoneIconContainer = styled.div`
  transform: scale(2.1);
  margin-top: 15px;
  color: #284136;
`;

export const GetStartedBtn = styled.button`
  background-color: #284136;
  color: white;
  border-style: none;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
  &:active {
    background-color: #43755d;
  }
`;

export const Slogan = styled.p`
  color: #284136;
  margin-top: 0px;
  text-align: center;
  font-size: 12px;
`;
