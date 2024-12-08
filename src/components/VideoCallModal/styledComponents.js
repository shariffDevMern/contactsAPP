import styled from "styled-components";

export const VideoScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: black;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

export const TopRightControls = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
`;

export const ControlBar = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const ControlButton = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 15px;
  border-radius: 50%;
  font-size: 1.2em;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: scale(1.1);
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: scale(1);
  }
`;

export const MinimizedVideo = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 150px;
  height: 150px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;

export const EndCallButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 50%;
  font-size: 1em;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;
