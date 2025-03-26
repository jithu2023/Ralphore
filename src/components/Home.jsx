import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage from '../assets/home4ralph.webp';
import summerImage from '../assets/summer4ralph.jfif';
import menpolo from "../assets/menpolos.jfif";
import womenpolo from "../assets/womenpolos.jfif";
import shopboys from "../assets/shopboys.jfif";
import shopgirls from "../assets/shopgirls.jfif";
import luxuryBagsImage from '../assets/ralphlaurenbag.jpg';
import luxuryBagBigvideo from '../assets/ralphlaurenvideo.mp4';
import blazers from '../assets/blazers.webp';
import trousers from '../assets/trousers.webp';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';


const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  centerMode: true,
  centerPadding: '50px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: '10px',
      },
    },
  ],
};

function Home() {
  const [hoveredImage, setHoveredImage] = useState(null);
  
  const navigate = useNavigate();


  return (
    <div className="overflow-y-auto">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img src={heroImage} alt="Fashion Banner" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center md:justify-start pl-10 md:pl-20 bg-opacity-80">
          <div className="max-w-lg w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-[#3e2c1c] mb-6 hidden md:block">Discover Your <span className="text-[#5b3b2e]">Style</span></h1>
            <p className="text-lg md:text-xl text-[#6e4d3b] mb-8 hidden md:block">Elevate your wardrobe with our latest fashion <span className="text-[#3e2c1c]">collection</span>.</p>
            <div className="flex justify-center md:justify-start mt-50 md:mt-0">
              <button onClick={() => navigate('/products')} className="backdrop-blur-lg bg-white/10 border border-white text-white font-semibold py-2 px-12 md:py-3 md:px-20 shadow-lg hover:bg-white/20 transition duration-300 active:scale-95">Shop Now</button>
            </div>
          </div>
        </div>
      </div>


       
      {/* Summer Collection Section */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mt-20 md:mt-0 md:ml-20 order-1 md:order-2 mb-10 md:mb-0">
          <h2 className="text-4xl font-light mb-4 mt-[-40px] md:mt-[-80px] text-center md:text-left" style={{ letterSpacing: '1.5px', fontWeight: '300', fontFamily: 'Lato, sans-serif' }}>SUMMER 2025</h2>
          <p className="text-gray-500 text-sm mt-0 text-center md:text-left" style={{ fontFamily: 'Lato, sans-serif' }}>Discover</p>
          <div className="w-16 h-0.5 bg-gray-400 mt-1 mx-auto md:mx-0"></div>
        </div>
        <img src={summerImage} alt="Summer Collection" className="w-full md:w-1/2 h-auto shadow-lg mt-4 md:mt-0 order-2 md:order-1" />
      </div>

      {/* Luxury Leather Bags Section */}
      <div className="luxury-leather-bags-section my-20 px-5 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Luxury Edit with Image */}
          <div className="flex flex-col md:w-1/2 space-y-4">
            <h2 className="text-3xl font-semibold ml-53 text-gray-800 text-center md:text-left">Luxury Edit</h2>
            <img src={luxuryBagsImage} alt="Luxury Bags" className="w-full md:w-[50%] h-[300px] md:h-[400px] object-cover shadow-lg md:ml-30" />
            <p className="text-gray-500 text-sm mt-4 text-center ml-60  md:text-left" style={{ fontFamily: 'Lato, sans-serif' }}>Discover</p>
            <div className="w-16  h-0.5 bg-gray-400 mt-[-10px] mx-auto   md:ml-58"></div>
          </div>

          {/* Right Section: Full-size Video */}
          <div className="md:w-1/2 md:h-[500px] mt-4 md:mt-[-80px] w-full h-auto">
            <video src={luxuryBagBigvideo} className="w-full h-[300px] md:h-[600px] object-cover shadow-lg" autoPlay loop muted />
          </div>
        </div>
      </div>

      {/* Categories Slider Section */}
      <div className="my-20 px-10">
        <Slider {...settings}>
          {[{ img: menpolo, label: "Men's Polos" }, { img: womenpolo, label: "Women's Polos" }, { img: shopgirls, label: "Shop Girls" }, { img: shopboys, label: "Shop Boys" }].map((item, index) => (
            <div key={index} className="relative">
              <img src={item.img} alt={item.label} className="w-full sm:w-80 md:w-96 h-120 object-cover rounded-lg shadow-lg" />
              <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">{item.label}</div>
            </div>
          ))}
        </Slider>
      </div>

     {/* New Section with Fixed Image and Movement Inside */}
     <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen bg-gray-100 relative">
        <div className="w-full md:w-1/2 h-80 md:h-full overflow-hidden relative mb-4 md:mb-0">
          <img src={blazers} alt="Blazers" className="w-full h-full object-cover absolute inset-0 transition-transform duration-[5000ms] scale-110 hover:scale-100" />
          <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">Blazers</div>
        </div>

        <div className="w-full md:w-1/2 h-80 md:h-full overflow-hidden relative">
          <img src={trousers} alt="Trousers" className="w-full h-full object-cover absolute inset-0 transition-transform duration-[5000ms] scale-110 hover:scale-100" />
          <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">Trousers</div>
        </div>
      </div>

      {/* Footer Section */}
            <Footer />
      
    </div>
  );
}

export default Home;
