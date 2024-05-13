import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import sco from "../images/soc.png"
import iso from "../images/iso.png"
import gdpr from "../images/gdpr.png"
import logo from "../images/logo.png"

const FooterSection = () => {
  return (
    <footer className="bg-footer-col text-black py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full w-[400px] md:w-1/2 lg:w-1/4 mb-8">
            <img src={logo} alt="logo" />
            <p className="mb-2">
              <span className="font-semibold">Email:</span> info@hirequotient.com
            </p>
            <p className="mb-2">
              <span className="font-semibold">Privacy Policy:</span> Read Here
            </p>
            <p className="mb-4">
              <span className="font-semibold text-wrap ">Location:</span> 67 Ayer Rajah Crescent Number 02-10/17 Singapore, 139950
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/4 flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>EasySource</li>
                <li>EasyAssess</li>
                <li>EasyInterview</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
              <h3 className="text-lg font-semibold mb-4">Solution</h3>
              <ul className="space-y-2">
                <li>Talent sourcing</li>
                <li>Skill assessment</li>
                <li>Video interviewing</li>
                <li>Managed sourcing solution</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>Blogs</li>
                <li>Cast study</li>
                <li>Job roles directory</li>
                <li>Podcast</li>
                <li>HR glossary</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>About us</li>
                <li>Careers</li>
                <li>Newsroom</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Competitors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <span>EasySource</span>
            </div>
            <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <span>Seekout</span>
            </div>
            <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <span>HireEZ</span>
            </div>
            <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <span>Metl</span>
            </div>
            <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <span>TestGorilla</span>
            </div>
            <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <span>Vidcruiter</span>
            </div>
            <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <span>Willo</span>
            </div>
          </div>
       
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <img src={gdpr} alt="GDPR" className="h-8" />
            <img src={iso} alt="ISO" className="h-8" />
            <img src={sco} alt="AIDA" className="h-8" />
          </div>
          
        </div>
        <hr className='mt-5'/>
        <div className='flex flex-row justify-around mt-2'>
            <p className="text-gray-400">All rights reserved © HireQuotient, 2022</p>
            <p className="text-gray-400">Sitemap | Guide: Validity of our assessments</p>
          </div>
      </div>
    </footer>
  );
};

export default FooterSection;
