"use client";
import React, { useState } from "react";
import "../Accordion/style.css";

const ToggleText = ({ initialText, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleText = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggle-text cort ">
      <div className="flex items-center justify-between">
        <h1 className=" text-3xl font-semibold">{title}</h1>
        <button
          className="px-3 py-1 bg-black-500 text-3xl text-white border-white rounded-lg focus:outline-none"
          onClick={toggleText}
          aria-label={isOpen ? "Close text" : "Open text"}
        >
          {isOpen ? (
            <span
              className="bg-white px-4 py-3 pborder text-center text-black   "
              style={{
                borderRadius: "50%",
              }}
            >
              -
            </span>
          ) : (
            <span
              className="bg-black px-4 py-3 border text-center  text-white   "
              style={{
                borderRadius: "50%",
              }}
            >
              {" "}
              +
            </span>
          )}
        </button>
      </div>
      <div className={`mt-2 ${isOpen ? "block" : "hidden"}`}>
        <p className="text-white text-lg ">{initialText}</p>
      </div>
      <div
        style={{
          borderBottom: "2px solid white",
          width: "100%", // Çizginin yatay boyutunu belirtmek için
          marginTop: "60px", // İsteğe bağlı, çizginin altında bir boşluk eklemek için
        }}
      ></div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center md:text-5xl text-xl font-medium mb-4 mt-8 ">
        Sorularınız mı var?
      </h1>
      <div className="responsive-container">
        <ToggleText
          initialText="OKX, gelişmiş finansal tekliflere sahip yenilikçi bir kripto para borsasıdır. 180'den fazla bölgede dünya çapında milyonlarca kullanıcıya son teknoloji kripto alım satımı ve kazanç hizmetleri sunuyoruz. ..."
          title="OKX hangi ürünleri sunuyor?"
        />
        <ToggleText
          initialText="GBP, EUR, USD veya yerel para biriminizle dakikalar içinde kolayca Bitcoin satın alabilirsiniz. OKX; Visa, Mastercard ve ApplePay kredi kartları da dahil olmak üzere çeşitli popüler ödeme yöntemlerini destekler. ..."
          title="OKX'te nasıl Bitcoin satın alırım?"
        />
        <ToggleText
          initialText="2017 yılında kurulan OKX,yeni nesil finansal ekosistemi inşa etmek için blok zinciri teknolojisini benimseyen Seyşeller'de kayıtlı bir kripto para borsasıdır ve yüzlerce kripto para için çeşitli işlem türleri sunar."
          title="OKX nerede kuruldu?"
        />
        <ToggleText
          initialText="OKX, Amerika Birleşik Devletleri’ndeki müşterilere hizmet veremez. Platformumuz, aşağıdaki bölgeler dışında küresel olarak kullanılabilir: Amerika Birleşik Devletleri, Singapur, Küba, İran, Kuzey Kore, Kırım, Malezya, Suriye, Kanada, Birleşik Krallık (özellikle perakende kullanıcılar için türevlerle ilgili Hizmetler), Bangladeş, Bolivya, Malta ve Hong Kong (özellikle perakende kullanıcılar için türevlerle ilgili Hizmetlerimizle ilgili). ..."
          title="ABD vatandaşları OKX'i kullanabilir mi?"
        />
      </div>
    </div>
  );
};

export default HomePage;
