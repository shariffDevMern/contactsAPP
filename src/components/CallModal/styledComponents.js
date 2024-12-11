import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: linear-gradient(to top, white, #3f6252);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const NameContainer = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const CallerName = styled.h1`
  color: white;

  text-align: center;

  span {
    color: darkgray;
    font-size: 12px;
  }
`;

export const CallFeaturesContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 300px;
  gap: 10px;
  margin-bottom: 70px;
  padding-left: 0px;
`;

export const CallFeatureButton = styled.button`
  background-color: ${(props) =>
    props.bgColor === "CUTCALL" ? "#f54242" : "#598c73"};
  border-style: none;
  border-radius: 100%;
  height: 70px;
  width: 70px;
  svg {
    color: white;
    height: 25px;
    width: 25px;
  }
`;
