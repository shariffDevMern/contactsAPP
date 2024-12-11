import React, { useRef, useEffect, useState } from "react";
import {
  VideoScreenContainer,
  StyledVideo,
  Overlay,
  ControlBar,
  ControlButton,
  TopRightControls,
  MinimizedVideo,
  EndCallButton,
} from "./styledComponents";

const VideoCallModal = () => {
  const localVideo = useRef(null);
  const [isMicOn, setMicOn] = useState(true);
  const [isVideoOn, setVideoOn] = useState(true);
  const [isSpeakerOn, setSpeakerOn] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const [callActive, setCallActive] = useState(true); // Toggle call state

  useEffect(() => {
    const videoElement = localVideo.current;

    // Access the user's webcam
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true }) // Video and audio
      .then((stream) => {
        if (videoElement) videoElement.srcObject = stream;
      })
      .catch((error) => console.error("Error accessing webcam:", error));

    return () => {
      // Cleanup webcam stream
      if (videoElement && videoElement.srcObject) {
        const tracks = videoElement.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);
  const handleEndCall = () => {
    // End the call by stopping the webcam feed
    const videoElement = localVideo.current;
    if (videoElement && videoElement.srcObject) {
      const tracks = videoElement.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setCallActive(false); // Update state to hide video
  };

  const toggleVideo = () => {
    setVideoOn((prev) => !prev);
    const tracks = localVideo.current?.srcObject?.getVideoTracks();
    tracks?.forEach((track) => (track.enabled = !track.enabled));
  };

  const toggleMic = () => {
    setMicOn((prev) => !prev);
    const tracks = localVideo.current?.srcObject?.getAudioTracks();
    tracks?.forEach((track) => (track.enabled = !track.enabled));
  };

  const toggleSpeaker = () => {
    setSpeakerOn((prev) => !prev);
    // Here we can handle speaker state changes if needed
  };

  const switchCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: isVideoOn ? "user" : "environment" },
      })
      .then((stream) => {
        if (localVideo.current) localVideo.current.srcObject = stream;
      })
      .catch((error) => console.error("Error switching camera:", error));
  };

  const handleMinimize = () => setMinimized(!minimized);
  if (!callActive) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Call Ended</h1>
    );
  }
  return minimized ? (
    <MinimizedVideo onClick={handleMinimize}>
      <p>Expand Video</p>
    </MinimizedVideo>
  ) : (
    <VideoScreenContainer>
      <StyledVideo ref={localVideo} autoPlay muted={!isSpeakerOn} />
      <Overlay>
        <TopRightControls>
          <ControlButton onClick={switchCamera}>🔄</ControlButton>
          <ControlButton onClick={handleMinimize}>➖</ControlButton>
        </TopRightControls>
        <ControlBar>
          <ControlButton onClick={() => console.log("More options")}>
            ⋮
          </ControlButton>
          <ControlButton onClick={toggleVideo}>
            {isVideoOn ? "📹" : "🚫📹"}
          </ControlButton>
          <EndCallButton onClick={handleEndCall}>End Call</EndCallButton>
          <ControlButton onClick={toggleSpeaker}>
            {isSpeakerOn ? "🔊" : "🔇"}
          </ControlButton>
          <ControlButton onClick={toggleMic}>
            {isMicOn ? "🎙️" : "🚫🎙️"}
          </ControlButton>
        </ControlBar>
      </Overlay>
    </VideoScreenContainer>
  );
};

export default VideoCallModal;
