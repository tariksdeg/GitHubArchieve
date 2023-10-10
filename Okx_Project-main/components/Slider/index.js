"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HorizontalSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Slider hızı
    slidesToShow: 3, // Ekranda görünen öğe sayısı
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Otomatik kaydırma hızı
  };

  const sliderStyle = {
    background: "linear-gradient(to right, #E8668A, #F98027, #DA52D6, #F2764F)",
    textAlign: "center", 
  };

  const tickerItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    textAlign:"center",
    margin:"10rem"
  };

  return (
    <div className="horizontal-slider h-16 " style={sliderStyle}>
      <Slider
        {...settings}
        className="flex align-items-center justify-center items-center m-auto"
      >
        <div className="ticker-item" style={tickerItemStyle}>
          BTC $26.277,10 (+%0,23)
        </div>
        <div className="ticker-item" style={tickerItemStyle}>
          ETH $1.595,31 (+%0,10)
        </div>
        <div className="ticker-item" style={tickerItemStyle}>
          OKB $42,78 (-%0,64)
        </div>
        <div className="ticker-item" style={tickerItemStyle}>
          LTC $63,44 (-%0,53)
        </div>
        <div className="ticker-item" style={tickerItemStyle}>
          XRP $0,50 (-%0,47)
        </div>
        <div className="ticker-item" style={tickerItemStyle}>
          BCH $228,28 (+%6,35)
        </div>
        <div className="ticker-item" style={tickerItemStyle}>
          SOL $18,98 (-%0,23)
        </div>
      </Slider>
    </div>
  );
};

export default HorizontalSlider;
