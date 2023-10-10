
import { useEffect, useState } from "react";

export default function ResponsiveContent() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

  
    window.addEventListener("resize", handleResize);

    
    setWindowWidth(window.innerWidth);

    return () => {
     
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="text-center">
      <div className="content">
        <div
          className={`large-screen-content ${
            windowWidth > 768 ? "block" : "hidden"
          }`}
        >
          <div className="m-40">
            <h1 className="text-5xl">Yolculuğunuzun Her Aşamasında Sizinle</h1>
            <p className="m-10 text-xl ">
              İlk kripto al-sat deneyiminizden ilk NFT işleminize kadar,tüm
              süreç boyunca size rehberlik edeceğiz
            </p>
          </div>
        </div>
        <div
          className={`small-screen-content ${
            windowWidth <= 768 ? "block" : "hidden"
          }`}
        >
        
            <h1 className="text-2xl  mt-40 ">Herkes için bir mod</h1>
            <p className="m-30 text-lg " 
              
         >
            Al-sat işlemlerinden,Defi dünyasına veya NFT piyasasına;hepsi bir yerde
              
            </p>
       
        </div>
      </div>
    </div>
  );
}
