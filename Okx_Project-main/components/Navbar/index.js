"use client";
import React from "react";
import VideoComponent from "../Video";
import MyButton from "../Button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-col lg:flex-row p-4 justify-center items-center lg:justify-around my-8 mx-3">
      <div className="lg:mr-4">
        <div className="flex-col text-center lg:text-left">
          <div
            className="text-4xl lg:text-6xl font-semibold leading-tight"
            style={{
              margin: "20px",
              lineHeight: "1.4",
            }}
          >
            Ortalama Kripto <br /> Borsalarından <br /> Daha Hızlı, Daha <br />{" "}
            İyi, Daha Güçlü
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:items-center gap-2 mt-4">
            <input
              className="bg-black border-2 border-white px-8 py-9 rounded-md text-lg font-medium h-12 w-full lg:w-48 focus m-4"
              type="text"
              placeholder="E-posta/Telefon"
            />
            <MyButton className="mt-2 lg:mt-1   " />
          </div>
          <div className="flex items-center flex-wrap justify-center lg:justify-between w-full  mt-4  ">
            <div>
              <Image
                src="https://static.okx.com/cdn/assets/imgs/236/DD7AC9432E675714.png"
                alt="Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü"
                width={120}
                height={88}
              />
            </div>
            <div>
              <Image
                src="https://static.okx.com/cdn/assets/imgs/2210/499A92F3657A52EC.png"
                alt="Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü"
                width={120}
                height={88}
              />
            </div>
            <div>
              <Image
                src="https://static.okx.com/cdn/assets/imgs/2210/6279B178FADAFCC5.png"
                alt="Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü"
                width={90}
                height={66}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 lg:mt-0">
        <div>
          <VideoComponent />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
