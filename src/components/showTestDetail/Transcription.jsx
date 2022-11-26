import React from "react";

function Transcription({ transcription, changeText }) {
  return (
    <div>
      <h1>Transcripción</h1>
      <p style={{'whiteSpace':'pre-line'}}>{changeText(transcription)}</p>
    </div>
  );
}

export default Transcription;
