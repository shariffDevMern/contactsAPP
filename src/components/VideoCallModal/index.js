import React, { useRef, useEffect } from "react";
import { VideoScreen } from "./styledComponents";

const VideoCallModal = () => {
  const localVideo = useRef(null); // For the user's webcam feed

  useEffect(() => {
    // Access the user's webcam
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false }) // Video only
      .then((stream) => {
        // Set the video stream as the source for the video element
        if (localVideo.current) {
          localVideo.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });

    return () => {
      // Stop the webcam stream when the component unmounts
      if (localVideo.current && localVideo.current.srcObject) {
        const tracks = localVideo.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    
      <VideoScreen
        ref={localVideo}
        autoPlay
        muted
        style={{ width: "100%", height: "100%", border: "1px solid black", borderRadius: "10px" }}
      />
    
  );
};

export default VideoCallModal;
