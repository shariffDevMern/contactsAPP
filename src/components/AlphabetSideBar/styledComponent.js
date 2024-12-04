import styled from "styled-components";

export const AlphabetContainer = styled.div`
  display: flex;
  position: absolute;
  left: 93%;
  flex-direction: column;
  gap: 0.5%;
  margin-top: 10px;
  top: 25%;

  justify-content: center;
`;

export const Alphabet = styled.a`
  text-decoration: none;
  color: #3f6252;
  font-size: 12px;
  &:hover {
    background-color: #3f6252;
    color: white;
    border-radius: 10px;
    padding: 5px;
  }
`;
