import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MyComponent from "@/components/Main2";
import Navbar from "@/components/Navbar";
import HorizontalSlider from "@/components/Slider";



export default function Home() {
  return <div>
   <Header/>
   <Navbar/>
   <HorizontalSlider/>
   <Main/>
   <MyComponent/>
   <Footer/>
  </div>;
}
