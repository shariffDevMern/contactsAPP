import styled from "styled-components";

export const FavoriteContactsList = styled.ul`
  list-style-type: none;

  padding-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  overflow-y: auto;
`;
export const FavoriteContainer = styled.div`
  height: 100vh;
  display: flex;

  flex-direction: column;
`;

export const NofavoriteContainer = styled.div`
display:flex;
height:100%;
flex-direction:column;
justify-content:center;
align-items:center;


`

export const Message = styled.p`
  text-align: center;
  color: #3f6252;
  font-weight: bold;
`

