"use client";
import Image from "next/image";
import { useState } from "react";
import HomePage from "../Accordion";
import "../Main2/style.css";
import ResponsiveText from "../ResponsiveText";
import ResponsiveVideo from "../ResponsiveVideo";

function MyComponent() {
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-20">
        <div className="mt-20 sm:text-center leading-loose h-96 order-2 lg:order-1">
          <h2
            className="lg:text-left text-center "
            style={{
              fontSize: "46px",
              fontWeight: "500",
              lineHeight: "61px",
              marginBottom: "16px",
              margin: "2rem",
            }}
          >
            Tek Platform, Sınırsız <br /> Özellik
          </h2>
          <div className="wrapper lg:m-3 m-10 ">
            <div className="option lg:text-left text-cente ">
              <input
                className="input lg:text-left text-cente "
                type="radio"
                name="btn"
                value="option1"
                onClick={() => handleButtonClick("button1")}
              />
              <div className="btn lg:text-left text-cente ">
                <span className="span lg:text-left text-cente ">Lite</span>
              </div>
            </div>
            <div className="option">
              <input
                className="input"
                type="radio"
                name="btn"
                value="option2"
                onClick={() => handleButtonClick("button2")}
              />
              <div className="btn">
                <span className="span">Web3</span>
              </div>{" "}
            </div>
            <div className="option">
              <input
                className="input"
                type="radio"
                name="btn"
                value="option3"
                onClick={() => handleButtonClick("button3")}
              />
              <div className="btn">
                <span className="span">Pro</span>
              </div>
            </div>
          </div>
          {selectedButton === "button1" && (
            <p
              style={{
                fontSize: "20px",
                lineHeight: "32px",

                margin: "2rem",
                className: "para",
              }}
            >
              Kriptoda yeni misiniz? Hiç sorun değil. Tek dokunuşla <br /> 5 USD
              değerinde bile kripto satın alabilir ve ilerledikçe <br />
              becerilerinizi geliştirebilirsiniz
            </p>
          )}
          {selectedButton === "button2" && (
            <p
              style={{
                fontSize: "20px",
                lineHeight: "32px",

                margin: "2rem",
                className: "para",
              }}
            >
              Tüm favori zincirlerinizi destekleyen dünyanin en iyi <br /> NFT
              piyasasi DEXi ve cüzdanini keşfedin
            </p>
          )}
          {selectedButton === "button3" && (
            <p
              style={{
                fontSize: "20px",
                lineHeight: "32px",

                margin: "2rem",
                className: "para",
              }}
            >
              Marjinli ve vadeli işlemler güçlü APIler ve alsat <br />
              botlari ile hareket halindeyken bir profesyonel gibi <br /> alım
              satim yapabilirsiniz
            </p>
          )}
        </div>
        <div className=" mt-4">
          {selectedButton === "button1" && (
            <Image
              src="https://static.okx.com/cdn/assets/imgs/236/53565E10320B7359.png"
              alt="Tek Platform, Sınırsız ÖzellikLite"
              width={400}
              height={400}
              className="w-60 lg:w-80"
            />
          )}
          {selectedButton === "button2" && (
            <Image
              src="https://static.okx.com/cdn/assets/imgs/237/296C30E044644A8A.png"
              alt="Tek Platform, Sınırsız ÖzellikWeb3"
              width={400}
              height={400}
              className="w-60 lg:w-80"
            />
          )}
          {selectedButton === "button3" && (
            <Image
              src="https://static.okx.com/cdn/assets/imgs/236/B300B5CD7BBEE474.png"
              alt="Tek Platform, Sınırsız ÖzellikPro"
              width={400}
              height={400}
              className="w-60 lg:w-80"
            />
          )}
        </div>
      </div>
      {/* !!! Main 3 Kısmı  */}
      <div className=" text-center">
        <ResponsiveText />
        <ResponsiveVideo />
      </div>
      <br /> <br /> <br />
      {/* Main 4 Kısmı  */}
      <div className="flex flex-col main4 md:flex-row justify-center mx-4 md:mx-16 lg:mx-20 h-auto md:h-80 w-full">
        <div className="md:w-1/2 md:pl-8 ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 md:mb-6">
            OKX nedir?
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-7 mb-6 md:mb-8">
            Birinci sınıf iş ortaklarımızın yardımıyla neden yeni favori kripto
            uygulamamızın biz olduğumuzu öğrenin
          </p>
          <button className="bg-white  text-black text-lg md:text-xl lg:text-2xl cursor-pointer leading-7 px-6 md:px-9 lg:px-14 py-4 md:py-6 lg:py-6 rounded-full">
            Keşfet
          </button>
        </div>
        <div className="logo-img md:w-1/2 md:pr-8  order-1 md:order-2">
          <Image
            src="https://static.okx.com/cdn/assets/imgs/2210/DBDC29AD98D75479.png"
            alt="OKX nedir? Birinci sınıf iş ortaklarımızın yardımıyla neden yeni favori kripto uygulamanızın biz olduğumuzu öğrenin."
            width={500}
            height={500}
          />
        </div>
      </div>
      {/* Video Kısmı */}
      <div className="flex gap-4 justify-center flex-wrap ">
        <div className="relative video-content h-80 "
        style={{
          width:"22rem"
        }}>
          <video
            className="video-content"
            controls
            playsInline
            poster="https://static.okx.com/cdn/assets/imgs/2211/30151288EAF5AEE6.jpg?x-oss-process=image/format,webp"
          />
          <source
            src="https://static.okx.com/cdn/assets/files/2210/B961D658AE174818.mp4"
            type="video/mp4"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <div className="text-center">
              <h2 className="text-2xl font-bold">
                Teknik direktör Pep Guardiola
              </h2>
              <p>Çılgın futbol formasyonunu açıklıyor</p>
            </div>
          </div>
        </div>
        <div className="relative video-content h-80  "
        style={{
          width:"22rem"
        }}>
          <video
            controls
            playsInline
            src="https://static.okx.com/cdn/assets/files/2210/D583B0A2F58732CD.mp4"
            poster="https://static.okx.com/cdn/assets/imgs/2211/8D4C3E2605F69059.jpg?x-oss-process=image/format,webp"
          >
         
            Tarayıcınız videoyu desteklemiyor.
          </video>

          <div
            className="absolute inset-0 flex items-center justify-center bg-black 
bg-opacity-50 text-white"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold">
                F1 Pilotu Daniel Ricciardo
              </h2>
              <p>OKX bir yariş arabasi mi diye soruyor </p>
            </div>
          </div>
        </div>
        <div className="relative video-content h-80 "
        style={{
          width:"22rem"
        }}>
          <video
            controls
            playsInline
            src="https://static.okx.com/cdn/assets/files/2210/CCAA7B610D3D33D4.mp4"
            poster="https://static.okx.com/cdn/assets/imgs/2211/EF1304B5D4D9DB3E.jpg?x-oss-process=image/format,webp"
          >
           
            Tarayıcınız videoyu desteklemiyor.
          </video>

          <div
            className="absolute inset-0 flex items-center justify-center bg-black 
bg-opacity-50 text-white"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold">
                Snowboard Yarışçısı Scotty James
              </h2>
              <p>Tüm aileyi bir araya getiriyor</p>
            </div>
          </div>
        </div>
      </div>
      <HomePage />
    </>
  );
}

export default MyComponent;
