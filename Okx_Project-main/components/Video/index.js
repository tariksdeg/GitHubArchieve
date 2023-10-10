import React from "react";

const VideoComponent = () => {
  return (
    <div>
      <video
        className="first-img"
        style={{ visibility: "visible" }}
        autoPlay
        loop
        muted
        playsInline
        width={350}
        height={585}
        poster="https://static.okx.com/cdn/assets/imgs/237/95265F65A5BC22A1.png?x-oss-process=image/format,webp"
        src="https://static.okx.com/cdn/assets/files/237/218B8A2E8CF37E47.mp4"
      >
        <track kind="captions" />
      </video>
    </div>
  );
};

export default VideoComponent;
