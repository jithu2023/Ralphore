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
import Footer from './Footer';

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

  return (
    <div className="overflow-y-auto">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img src={heroImage} alt="Fashion Banner" className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>

      {/* Summer Collection Section */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mt-20 md:mt-0 md:ml-20 order-1 md:order-2 mb-10 md:mb-0">
          <h2 className="text-4xl font-light mb-4 mt-[-40px] md:mt-[-80px] text-center md:text-left">SUMMER 2025</h2>
          <p className="text-gray-500 text-sm mt-0 text-center md:text-left">Discover</p>
          <div className="w-16 h-0.5 bg-gray-400 mt-1 mx-auto md:mx-0"></div>
        </div>
        <img src={summerImage} alt="Summer Collection" className="w-full md:w-1/2 h-auto shadow-lg mt-4 md:mt-0 order-2 md:order-1" />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;
