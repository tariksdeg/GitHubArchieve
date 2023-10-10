import React from "react";
import VideoPlayer from "../VideoPlayer";
import Image from "next/image";

const Main = () => {
  return (
    <>
      <div className="h-auto w-full px-3 pt-0 pb-24 md:pb-48 leading-4">
        <div className="h-20 md:h-28">
          <h1 className="text-2xl md:text-5xl mt-10 leading-normal font-medium h-12 md:h-16 w-full block text-center tracking-normal font-harmony">
            Profesyonel İşlemler Yapın
          </h1>
          <h3 className="text-lg md:text-xl text-center leading-6 md:leading-8 block h-8 md:h-10 my-4 md:my-5 w-full">
            En düşük İşlem Ücretleri, En Hızlı İşlemler, Güçlü API Desteği ve
            Daha Fazlası
          </h3>
        </div>
        <VideoPlayer />
      </div>
      <div></div>
    </>
  );
};

export default Main;
