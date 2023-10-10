"use client"
import { useEffect, useState } from "react";

const videos = [
  "https://static.okx.com/cdn/assets/files/2210/D47D930F643E7A00.webm",
  "https://static.example.com/video2.webm",
  "https://static.example.com/video3.webm",
];

export default function ResponsiveVideo() {
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        // Küçük ekranlarda bir sonraki videoya geçin
        setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      }
    }

    // İlk render'dan sonra ve pencere boyutu değiştiğinde çalışır.
    window.addEventListener("resize", handleResize);

    // İlk render'da pencere genişliğini kontrol edin
    handleResize();

    return () => {
      // Component unmount olduğunda event listener'ı kaldırın
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full mx-4 mt-10 md:mx-20">
      <div className="video-player w-full text-6xl h-screen">
        <video
          className="third-pc-animation w-full h-96 object-cover"
          autoPlay
          loop
          playsInline
          muted
          style={{ visibility: "visible" }}
          poster="https://static.okx.com/cdn/assets/imgs/2210/2763D233C494439D.jpg?x-oss-process=image/format,webp"
        >
          <source src={videos[videoIndex]} type="video/webm" />
         
          Tarayıcınız videoyu desteklemiyor.
        </video>
      </div>
    </div>
  );
}
