"use client"

import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video
        className="second-img w-full h-1/2 mt-16 max-w-full inline"
        style={{ visibility: 'visible' }}
        autoPlay
        loop
        muted
        playsInline
        width={936}
        height={536}
        poster="https://static.okx.com/cdn/assets/imgs/233/939BF8112345BC9B.png?x-oss-process=image/format,webp"
      >
        <source
          src="https://static.okx.com/cdn/assets/files/2212/882D5049A31E763B.mp4"
          type="video/mp4"
        />
      
        Tarayıcınız videoyu desteklemiyor.
      </video>
    </div>
  );
};

export default VideoPlayer;
