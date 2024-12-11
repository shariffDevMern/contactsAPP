import styled from "styled-components";

export const RecentContainer = styled.div`
  height: 100vh;
  display: flex;

  flex-direction: column;
`;

export const RecentList = styled.ul`
  list-style-type: none;
  padding-left: 10px;

  height: 100%;
  overflow-y: auto;
`;

export const CallInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
`;

export const InfoButton = styled.button`
  border-style: none;
  background-color: transparent;
  width: 50px;
  svg {
    color: #3f6252;
    height: 30px;
    width: 30px;
  }
`;

export const CallItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;

  .recent-call {
    width: 100%;
  }
`;

export const CallDate = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  svg {
    color: #3f6252;
  }
`;

export const DateText = styled.p`
  margin: 0px;
  font-size: 12px;
  color: #3f6252;
`;

export const NoHistoryView = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoHistoryText = styled.p`
  text-align: center;
  color: #3f6252;
  font-weight: bold;
`;

export const AddUnknownContactBtn = styled(InfoButton)``;
export const ClearRecentBtn = styled.button`
  border-style: none;
  background-color: transparent;
  color: #3f6252;
  cursor: pointer;
  &:active {
    text-decoration: underline;
  }
`;
