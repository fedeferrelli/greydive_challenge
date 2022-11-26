function Video({ linkVideo }) {
  return (
    <div>
      <video src={linkVideo} controls width="70%" height="70%" />
    </div>
  );
}

export default Video;
