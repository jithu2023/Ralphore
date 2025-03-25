import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaGooglePay, FaPaypal, FaCcVisa, FaCcMastercard, FaApplePay } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-16 relative z-10">
      <div className="container mx-auto px-4 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Shop Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-black">Shop</h3>
          <ul>
            {['Coats', 'Dresses', 'Skirts', 'Tops', 'Pants', 'Denim', 'Abaya', 'Kaftans', 'Accessories'].map((item) => (
              <li key={item}><Link to={`/${item.toLowerCase()}`} className="hover:underline">{item}</Link></li>
            ))}
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-black">Help</h3>
          <ul>
            {['Contact', 'Retailers', 'Account', 'Privacy', 'Terms'].map((item) => (
              <li key={item}><Link to={`/${item.toLowerCase()}`} className="hover:underline">{item.replace('Account', 'My Account').replace('Privacy', 'Privacy Policy').replace('Terms', 'Terms & Conditions')}</Link></li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-black">Newsletter</h3>
          <p className="text-gray-500 mb-4">Join our newsletter for exclusive updates and offers.</p>
          <input type="email" placeholder="Enter your email address" className="w-full p-2 border rounded-lg" />
          <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg">Subscribe</button>
        </div>

        {/* Social and Payment Section */}
        <div className='ml-10'>
          <h3 className="text-xl font-semibold mb-4 text-black">Follow Us</h3>
          <div className="flex space-x-4">
            <FaFacebookF className="text-[#1877F2]" />
            <FaInstagram className="text-[#E1306C]" />
            <FaPinterestP className="text-[#BD081C]" />
            <FaYoutube className="text-[#FF0000]" />
          </div>
          <h3 className="text-xl font-semibold mt-10 mb-4 text-black">Supported Payment Methods</h3>
          <div className="flex space-x-4">
            <FaGooglePay className="text-black" />
            <FaPaypal className="text-blue-600" />
            <FaCcVisa className="text-blue-700" />
            <FaCcMastercard className="text-red-600" />
            <FaApplePay className="text-gray-900" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;