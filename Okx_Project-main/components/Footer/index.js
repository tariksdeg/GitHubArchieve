"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
   
    const handleWindowResize = () => {
      if (window.innerWidth >= 768) {
      
        setAccordionOpen(true);
      } else {
     
        setAccordionOpen(false);
      }
    };

 
    handleWindowResize();

 
    window.addEventListener("resize", handleWindowResize);

    
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

 
  const toggleAccordion = () => {
    if (window.innerWidth < 768) {
      setAccordionOpen(!accordionOpen);
    }
  };

  return (
    <footer
      style={{
        fontSize: "14px",
        lineHeight: "20px",
        height: "1500px",
        width: "100%",
        padding: "40px 51px 47px 51px",
        backgroundColor: "#121212",
      }}
    >
      <div className="mb-10">
        <div>
          <Image
            src="data:image/png;base64,
iVBORw0KGgoAAAANSUhEUgAAAKQAAABICAQAAADSOpYzAAAABGdBTUEAALGPC/
xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/
4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfmBwMNKhI4Vg/
yAAABMklEQVR42u3aQW6DMBBAUZyT5eSFE/RInS5psOKx8Scq0n9ZNXjA+VE3VpZFkiRJkiShYo0rrYPPWyf3
+3VYXZL138nTuudLxLVfVCmHrcXY+uqjteejPF7/XH5G1teXe+ebt1E/
Q0IMCTEkxJAQQ0IMCTEkxJAQQ0IMCTEkxJCQ+4XcBq+Orj87n54oPlv3iWc2Xk3A55tzZs8rd
+l55OT54PB5ZLrhMjd/2M3keeXufv/a/5QhIYaEGBJiSIghIYaEGBJiSIghIYaEGBJiSEgaMjtG+/B+tw/
f8eVqlPq1X7xYlX5wfTXfPj/095Hv1tdfRPLJ/
X3kvRkSYkiIISGGhBgSYkiIISGGhBgSYkiIISGGhDwuOOH7a+t4p//
qmflticYrf946OS9JkiRJkk75BUgSur6QrNyYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA3LTAzVDEzOjQy
OjE4KzAwOjAwKpbwNQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNy0wM1QxMzo0MjoxOCswMDowMFvLSIkAA
AAASUVORK5CYII="
            alt="Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü"
            width={100}
            height={80}
          />
        </div>
        <p>©2023 OKX.COM</p>
        <input className="mt-10" type="text" placeholder="Tükçe/USD" />
      </div>
      <div className=" w-full m-auto gap-4 leading-9 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="mb-6 w-52 ">
            <h2
              className="text-xl font-semibold mb-2"
              onClick={toggleAccordion}
            >
              OKX hakkında
            </h2>
            <ul
              className={`text-gray-400 ${accordionOpen ? "block" : "hidden"}`}
            >
              <Link className="hover:text-white " href="#">
                Hakkımızda
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Kariyer
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Bize Ulaşın
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Hizmet Şartları
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                gizLinkk Politikaları
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Açıklamalar
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Feragatname
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Hukuki Yaptırım
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                OKX Uygulaması
              </Link>
            </ul>
          </div>
          <div className="mb-6 w-52 ">
            <h2
              className="text-xl font-semibold mb-2"
              onClick={toggleAccordion}
            >
              Ürünler
            </h2>
            <ul
              className={`text-gray-400 ${accordionOpen ? "block" : "hidden"}`}
            >
              <Link className="hover:text-white " href="#">
                Kripto satın alın
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                P2P alım-satım
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Dönüştürme
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Al-Sat
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Earn
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                OKC
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                OKX Wallet
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Web3 Marketi
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Kripto hesap makinesi
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Al-Sat Botları
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Tüm kripto paralar
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Akademi
              </Link>
             
            </ul>
          </div>
          <div className="mb-6 w-52 ">
            <h2
              className="text-xl font-semibold mb-2"
              onClick={toggleAccordion}
            >
              Hizmetlerimiz
            </h2>
            <ul
              className={`text-gray-400 ${accordionOpen ? "block" : "hidden"}`}
            >
              <Link className="hover:text-white " href="#">
                İştirak
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                {" "}
                V5 API
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Geçmiş piyasa verileri
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Ücret Tablosu
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Linksteleme Başvurusu
              </Link>
              <Link className="hover:text-white " href="#">
                P2P ilanveren başvurusu
              </Link>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Destek</h2>
            <ul
              className={`text-gray-400 ${accordionOpen ? "block" : "hidden"}`}
            >
              <Link className="hover:text-white " href="#">
                Destek Merkezi
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Resmi Hesapları Doğrula
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Duyurular
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                OKX Toplulukları
              </Link>
             
            </ul>
          </div>
          <div className="mb-6 w-52 ">
            <h2
              className="text-xl font-semibold mb-2"
              onClick={toggleAccordion}
            >
              Kripto satın alın
            </h2>
            <ul
              className={`text-gray-400 ${accordionOpen ? "block" : "hidden"}`}
            >
              <Link className="hover:text-white " href="#">
                USDT satın alın
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Bitcoin Satın Al
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Ethereum Satın Al{" "}
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                ADA Satın Al
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Solana Satın Al
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                MATIC Satın Al
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Linktecoin al
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                XRP Satın Al
              </Link>
            
            </ul>
          </div>
          <div className="mb-6 w-52 ">
            <h2
              className="text-xl font-semibold mb-2"
              onClick={toggleAccordion}
            >
              Kripto hesap makinesi
            </h2>
            <ul
              className={`text-gray-400 ${accordionOpen ? "block" : "hidden"}`}
            >
              <Link className="hover:text-white " href="#">
                BTC/TRY
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                ETH/TRY
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                USDT/TRY
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                SOL/TRY
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                XRP/TRY
              </Link>{" "}
            </ul>
          </div>
          <div className="mb-6 w-52 ">
            <h2
              className="text-xl font-semibold mb-2"
              onClick={toggleAccordion}
            >
              Al-Sat
            </h2>
            <ul
              className={`text-gray-400 ${accordionOpen ? "block" : "hidden"}`}
            >
              <Link className="hover:text-white " href="#">
                BTC text-decoration-Linkne-through
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                ETH USDT
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                MATIC USDT
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                LTC USDT
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                SOL USDT
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                XRP USDT
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Bitcoin fiyatı
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Web3 Marketi
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Ethereum fiyatı
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Cardano fiyatı
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                Solano fiyatı
              </Link>{" "}
              <br />
              <Link className="hover:text-white " href="#">
                XRP fiyatı
              </Link>
           
            </ul>
          </div>
          <div className=" w-52 leading-10 ">
            <div className="text-2xl text-white mb-5 ">
              OKX Uygulaması <br /> ile Dilediğiniz Zaman <br /> İşlem
              YapabiLinkrisniz
            </div>
            <button
              className="bg-white mb-10  text-black text-lg md:text-xl lg:text-2xl cursor-pointer leading-7 
px-6 md:px-9 lg:px-14 py-4 md:py-6 lg:py-2 rounded-full"
            >
              Kayıt
            </button>
            <div className="">
              <Image
                src="data:image/png;base64,
iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAACAFJREFUeF7tnWGb2jAMg+H//
+jbwxiQSyO/slsOjnnfdm3TxLIsOS1wPp1OX6fCv6+v9WXn81mONl9zO/f2d/X/24DZ827XuePO58/3vfx/Hsu9hxviS/
QakCm55qQaE+nHAFEZPyOrJpTJFGKXyyTKuuw4MwMjhqh7KxbTXG9xvTOkATmd3hIQpQF76/
eYIW7mEpMoS4ndVH4cDVHljXRL6eKGIQ3IQ7g/
EpAxSykjiTkZnbqcW63nym2tWO6uyU30pzOkAbma2B8DhOr0qs67k1MiS46F
+hZimmtwonm8TEMakDUshwFC2Uc1M7peacRKPFc0dzXB7ZVcl5bZfVDsc+N6WB8STTobcCWq/
xUghOB8nPqSVf3PXvNu50fOzS1RFOfde1mZDcJ3C3B2Pj8CyNcRlmKAnep3RRsIdDIW1E2TlozXu70SMUEdPzcgOnRR2a
2KNwElAXGzqtIruNdQSaHFUTYTm1fHs2xV7JVGRzGkAVk/
jHobQKj7zdheciRHM4M6c9KQ8bizztV4rlTbJasBuUbg6YDcHuFSVtLDG8r60TKSK6Ljldo/
BtN9zuJmdcY5Upzkbi8BVGEMBcI9/tGAVG0v7WlVsstloXQo/954oXFc5xMBr0wPjT0f3zjBBkQ/
IXwJILOGkLfP2uGVQ8mwxxFSt99wmRVlObGPKgfNobzbqzRE3dARVZUM5GwakCFylDHNkLVdVklk72WRXXOaK6KzcnauU
KpFEpuV0Doakr0nstkV9QbkO2yUXNQW3I5v4jq/20uIk
+hHtq7aPxBDiFlKg6jcknaN86IeKtLWUV83D6gaEP1KaZSMhwEylyyytdkbr7IsCzrtGtCcsG6LhjKy51SyaE6qpG1EvQ
HRnwFxHKNblhGQ7EAVZyKFDLY8Il2qBIk0hTRrVbqIxbSG25zuDGlAHtrxUkDU1omyucqZEGMcQaR7zgyjrHMDSxoTzT2
byLRtJLdOKDhkCV3gLoslursmABcrPv/
4KwBxs4saoBE4Cjx5dcUQ6ieyvVOUbHQvSlSqJPbmIt3ICbZzzsgYFUhygi6w7virBtCdAyXDHBMsWbS4zJYKlZ4sYCoo
it1uR0+lb
+XsqFLYDpNEvQGJc5yYQvq0Sehbp04liRxNhSlZh0L0V8njzo0YvDIgpAkZtl3G2vQhz1505KqyRkLN1c1KN8kcDXFLFs
W3/DwEBza+YoPoXs346j6SY9WdcyIAiTENyOL7Syq2l9hK5fku
+uq7TrKZQBP6Wx8D1qyyipwJsZSycR6f9GAst3Rtdm73vawGxP/I8ksAoU6UhDdyKtk+gNwRaQW5Jlf8x/P2PgehXks
+Mcw2XSTAjrvK7p99JCDqiSEhSUxy9cLRDtInAlLVe5dBGZGnuJE9lk8MaeAG5Brao+J0Hyf7cQSlIVQ
+VpPPNmakQUcxwbmPYo0Th8iBpT+O0IBcI/A0QNzPGJKvpjo/LoJojnW22M+4fc1RPdgqJqRb6Y+0ZYGJLKNra
+k8JxnGc2i8lwKSfXOR6mu0ReB6eNehufWa5kzMqSRVFdT0m4u0uAbk+r3FZUDU8xCqdaoRVE7HKXVHaQt14K4bi9ZCtl
+ZH
+Us73tZDcgjRG4JjBiQGWM1jnxApQamekvMOUJcs3NzrbqzXeTuCqiKQNc3IEPkfgUg1AC5FjLqQ6q2VdVjlxGOro3zHk
uMqhR7/44MaUC+d+VZw5A9H9/Lcp0PuQfHCpKzI8F050r3iZhDdjarb5sKQ
+9luYtsQK4R2A1I9kOfrotyniFQz0LZSBpA5aKyc0Bj0ppU/DZ9CC3OcSArS7sa1y0Z/yUgVLII0fl4ZusEPfm0q
+tu26g5UdI5CUDnULJRh4+i3oB8h/HlgOxGfMhyyg7VPziGIeOMaE3OWNV+Q429eS
+rKlYU5FF76NwG5HSyXwNyS1dUv4nuVPvpegKcXBXdf0wYulfZbakHVNSh0w1XE6aAUkDoegrSrwCE3suiwLvOJTqP3Ja
ag9u5q1JIri2zdnculBT4XlZmUk7PsTqnAXnslzUgwc+pZpLx6QxRJSa7VzOO4zLBDURWM2i3gR4lRBXAHVuZo/
ua6duAVA9AfnoFXAPyiJpk1PxMnainnBA5oMt1rogSQ7KNHbF6vp8zTxLnapzKXz6jJu3s8kb7XasSRyyN7jkmAjnCDIN
/DBBaPGVT1Eu4NZ+yi2xs9rhaU8YRKm2gZNnMlT6nTiUsE
+TMuZkSR4yj428FCH3GUGWbm8XRXhaVPTpOJSirNao6rNZAOufObWaQ/JU2YkYDco1AtiRFJf3veO4jXIW48t/
ORN0MVudR0rjX0RrGcWhdNCcVx3s1aEByv47wdECUhmRroJON7mJop5nsKXXNpIvKMa1KFOkc9Wfz8cN/
6TNyLA3INs0lINVulrLNqb976y7Ngeq2ckxuTEbmuGuRzKr
+oEv2xpEjccdStvSjAdlbvytNlhvorPd3dG28t7PbS5rgaq+Kk/xYNDVJtAHndMcEvmu1syWJGBkF/
dcCEmVK1SXRhp6bJJRsGZe1lxEzU57GkAbkGgG3bN6SbTcglCGr49Qn0HFZf6cv9afzKnOf2UOspXug7aW67mgDTYICTs
cp0JSV1A/R/MfMfzogNBmaQEX0siJL/UE2adwEuMSGwKTOHeN7VB/iWEbXDWUZMI/7EYAQcsqZqODNfx
+vdxkRjeGMR3PLHo9E2o3PrEHzHHbvZdGiVhRvQLT7+gPIOBx2OFjLEwAAAABJRU5ErkJggg=="
                alt="QR Code"
                width={100}
                height={100}
              />
              <p>OKX uygulaması indirmek için QR kodunu tarayın</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




































































































































































































































































































































