
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gradient-to-bl from-[#F9F8EC] to-[#FAF2F4] py-10 px-6 font-space">
      <div className="max-w-7xl mx-[7rem]  gap-8 text-[#1B4555] flex flex-col lg:flex-row  justify-between items-center  ">
        
        {/* Left Section - About */}
        <div className='flex flex-col items-center lg:items-start'>
          <img
            src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1730331464/sinclair/easygold_initiative_2_eoiozy.png" // Replace with actual logo URL
            alt="EasyGold Initiative"
            className="mb-4 lg:h-[10rem] mx-auto md:mx-0"
          />
          <p className="md:text-[18px] text-[10px]   text-center md:text-left lg:w-[364px]">
            At EasyGold, we are dedicated to providing accessible mental health support and resources. Our mission is to empower individuals on their journey to mental well-being through personalized care, community support, and expert guidance.
          </p>
        </div>
        
        {/* Center Section - Useful Links */}
        <div className="text-center md:text-left">
          <h3 className="md:text-[29px] text-[18px] font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="hover:text-gray-900">Programs</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
        
        {/* Right Section - Contact Details */}
        <div className="text-center md:text-left">
          <h3 className="md:text-[29px] text-[18px] font-bold mb-4">Contact Details</h3>
          <p>1234 Wellness Blvd, Suite 567<br />VGC, Lekki, Lagos.</p>
          <p>Email: <a href="mailto:support@easygold.org" >support@easygold.org</a></p>
          <p>Phone: 08021996733</p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-gray-600">
            <a href="#"><FaLinkedin className="hover:text-gray-900" /></a>
            <a href="#"><FaFacebook className="hover:text-gray-900" /></a>
            <a href="#"><FaInstagram className="hover:text-gray-900" /></a>
            <a href="#"><FaTwitter className="hover:text-gray-900" /></a>
          </div>
        </div>
        
      </div>

      {/* Bottom Section - Copyright */}
      <div className="md:border-t md:border-gray-300 mt-8 md:w-[39rem] mx-auto pt-4 text-center text-gray-500">
        <p>© Copyrights 2024, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
