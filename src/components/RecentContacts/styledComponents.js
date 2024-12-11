import styled from "styled-components";

export const RecentContainer = styled.div`
  height: 100vh;
  display: flex;

  flex-direction: column;
`;

export const RecentList = styled.ul`
  list-style-type:none;
  padding-left:10px;
  border-style:solid;
  height:100%;
  overflow-y:auto;`

export const CallInfoContainer =styled.div`
display:flex;
flex-direction:column;
align-items:center;`

export const InfoButton = styled.button`
border-style:none;
background-color:transparent;
svg{
color:#3f6252;
height:30px;
width:30px;}`

export const CallItem = styled.li`
display:flex;
justify-content:space-between;
align-items:center;
padding-right:20px;

`

export const CallDate = styled.div`
display:flex;
gap:10px;
justify-content:center;
align-items:center;
svg{
color:#3f6252;}`

export const DateText = styled.p`
margin:0px;
font-size:12px;
color:#3f6252;`