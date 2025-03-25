import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Search, ShoppingBag, Menu, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iconStyle = { strokeWidth: 0.8, fontSize: '12px', fontFamily: 'Lato, sans-serif', letterSpacing: '1.5px', fontWeight: '300' };

  // Always keep the background for /products page with no shadow
  const isProductsPage = location.pathname === '/products';
  const navbarBackground = isProductsPage
    ? 'bg-white'
    : isScrolled
    ? 'md:bg-white'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between md:justify-between h-20 ${navbarBackground} md:transition-all md:duration-300 z-50`} style={iconStyle}>
      
      {/* Left Section */}
      <div className="hidden md:flex space-x-10 pl-10">
        <Link to="/collections" className="hover:underline">Collections</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/journal" className="hover:underline">Journal</Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden pl-10 relative z-30" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu size={24} className="cursor-pointer" />
      </button>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 font-bold text-xl md:text-3xl">Ralphoré</div>

      {/* Right Section */}
      <div className="flex items-center space-x-6 pr-7">
        <Heart className="cursor-pointer" style={iconStyle} />
        <Search className="cursor-pointer" style={iconStyle} />
        <Link to="/my-bag">
          <ShoppingBag className="cursor-pointer" style={iconStyle} />
        </Link>
      </div>

      {/* Mobile Menu Fullscreen */}
      {isMenuOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-white text-black flex flex-col p-10 space-y-8 z-[999] overflow-y-auto">
          <button className="absolute top-5 right-5" onClick={() => setIsMenuOpen(false)}>
            ✖
          </button>
          <Link to="/collections" className="text-xl">Collections</Link>
          <Link to="/shop" className="text-xl">Shop</Link>
          <Link to="/about" className="text-xl">About</Link>
          <Link to="/journal" className="text-xl">Journal</Link>

          <hr className="border-gray-300 my-4" />

          <Link to="/retailer" className="text-xl">Retailer</Link>
          <Link to="/contact" className="text-xl">Contact</Link>
          <Link to="/account" className="text-xl">Account</Link>

          <div className="flex items-center text-xl">
            USD <ChevronDown className="ml-2" size={18} />
          </div>

          <div className="flex space-x-6 mt-8">
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaPinterestP className="cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
