import React, { useState, useRef, useEffect } from 'react';
import logo from "../images/logo.png";

const Navbar = () => {
    const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);
  const [showToolsMenu, setShowToolsMenu] = useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);

  const [showDrawer, setShowDrawer] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // Create a ref to the sidebar element
  const sidebarRef = useRef(null);

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowDrawer(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src={logo} alt="logo" className="h-10" />
            </a>
            <button className="md:hidden inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base bg-button-col text-white hover:bg-indigo-700" onClick={toggleDrawer}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5 hidden md:flex">
            {/* Menu items */}
                        {/* Products */}
                        <div className="relative">
              <a className={`mr-5 hover:text-gray-900 font-semibold cursor-pointer relative ${activeMenu === 'Products' ? "text-blue-500" : ""}`} onClick={() => handleMenuClick('Products')}>
                Products
                <svg className={`w-4 h-4 inline-block ml-1 transition-transform transform ${activeMenu === 'Products' ? "rotate-90" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
                {activeMenu === 'Products' && (
                  <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">EasySources</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">EasyAssess</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">EasyInterview</a>
                    </div>
                  </div>
                )}
              </a>
            </div>
            {/* Solutions */}
            <div className="relative">
              <a className={`mr-5 hover:text-gray-900 font-semibold cursor-pointer relative ${activeMenu === 'Solutions' ? "text-blue-500" : ""}`} onClick={() => handleMenuClick('Solutions')}>
                Solutions
                <svg className={`w-4 h-4 inline-block ml-1 transition-transform transform ${activeMenu === 'Solutions' ? "rotate-90" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
                {activeMenu === 'Solutions' && (
                  <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Talent Acquisition</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Skill assessments </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Video interviewing</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Industries</a>
                    </div>
                  </div>
                )}
              </a>
            </div>
            {/* Tools */}
            <div className="relative">
              <a className={`mr-5 hover:text-gray-900 font-semibold cursor-pointer relative ${activeMenu === 'Tools' ? "text-blue-500" : ""}`} onClick={() => handleMenuClick('Tools')}>
                Tools
                <svg className={`w-4 h-4 inline-block ml-1 transition-transform transform ${activeMenu === 'Tools' ? "rotate-90" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
                {activeMenu === 'Tools' && (
                  <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">JD Generator</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">ROI Calculator</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">HR Toolkit</a>
                    </div>
                  </div>
                )}
              </a>
            </div>
            {/* Resources */}
            <div className="relative">
              <a className={`mr-5 hover:text-gray-900 font-semibold cursor-pointer relative ${activeMenu === 'Resources' ? "text-blue-500" : ""}`} onClick={() => handleMenuClick('Resources')}>
                Resources
                <svg className={`w-4 h-4 inline-block ml-1 transition-transform transform ${activeMenu === 'Resources' ? "rotate-90" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
                {activeMenu === 'Resources' && (
                  <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Blog</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Case studies</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">How to hire</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Podcasts</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">HR glossary</a>
                    </div>
                  </div>
                )}
              </a>
            </div>
            {/* Company */}
            <div className="relative">
              <a className={`mr-5 hover:text-gray-900 font-semibold cursor-pointer relative ${activeMenu === 'Company' ? "text-blue-500" : ""}`} onClick={() => handleMenuClick('Company')}>
                Company
                <svg className={`w-4 h-4 inline-block ml-1 transition-transform transform ${activeMenu === 'Company' ? "rotate-90" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
                {activeMenu === 'Company' && (
                  <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">About us</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Careers</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Newsroom</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Contact Us</a>
                    </div>
                  </div>
                )}
              </a>
            </div>
            {/* Request Demo Button */}
            <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base bg-button-col text-white hover:bg-indigo-700" onClick={() => console.log("Request Demo clicked")}>Request demo</button>

          </nav>
        </div>
      </header>
      {/* Mobile Menu Drawer */}
      <div ref={sidebarRef} className={`md:hidden fixed inset-y-0 left-0 flex flex-col w-64 bg-white shadow-xl ${showDrawer ? 'z-50' : 'z-0'} ${showDrawer ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300`}>
        <div className="p-5">
          {/* Sidebar content */}
                       {/* Products */}
                       <a 
            onMouseEnter={() => setShowProductMenu(true)} 
            onMouseLeave={() => setShowProductMenu(false)} 
            className={`block px-4 py-2 font-semibold hover:text-gray-900 cursor-pointer ${showProductMenu ? "text-blue-500" : ""}`}
          >
            Products
            <svg 
              className={`w-4 h-4 inline-block ml-1 transition-transform transform ${showProductMenu ? "rotate-90" : "rotate-0"}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
            </svg>
            {showProductMenu && (
              <div className="mt-2 ml-4">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">EasySources</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">EasyAssess</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">EasyInterview</a>
              </div>
            )}
          </a>
            {/* Solutions */}
          <a 
            onMouseEnter={() => setShowSolutionsMenu(true)} 
            onMouseLeave={() => setShowSolutionsMenu(false)} 
            className={`block px-4 py-2 font-semibold hover:text-gray-900 cursor-pointer ${showSolutionsMenu ? "text-blue-500" : ""}`}
          >
            Solutions
            <svg 
              className={`w-4 h-4 inline-block ml-1 transition-transform transform ${showSolutionsMenu ? "rotate-90" : "rotate-0"}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
            </svg>
            {showSolutionsMenu && (
              <div className="mt-2 ml-4">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Talent Acquisition</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Skill assessments </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Video interviewing</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Indutries</a>
              </div>
            )}
          </a>
          {/* Tools */}
          <a 
            onMouseEnter={() => setShowToolsMenu(true)} 
            onMouseLeave={() => setShowToolsMenu(false)} 
            className={`block px-4 py-2 font-semibold hover:text-gray-900 cursor-pointer ${showToolsMenu ? "text-blue-500" : ""}`}
          >
            Tools
            <svg 
              className={`w-4 h-4 inline-block ml-1 transition-transform transform ${showToolsMenu ? "rotate-90" : "rotate-0"}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
            </svg>
            {showToolsMenu && (
              <div className="mt-2 ml-4">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">JD Generator</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">ROI Calculator</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">HR Toolkit</a>
              </div>
            )}
          </a>
          {/* Resources */}
          <a 
            onMouseEnter={() => setShowResourcesMenu(true)} 
            onMouseLeave={() => setShowResourcesMenu(false)} 
            className={`block px-4 py-2 font-semibold hover:text-gray-900 cursor-pointer ${showResourcesMenu ? "text-blue-500" : ""}`}
          >
            Resources
            <svg 
              className={`w-4 h-4 inline-block ml-1 transition-transform transform ${showResourcesMenu ? "rotate-90" : "rotate-0"}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
            </svg>
            {showResourcesMenu && (
              <div className="mt-2 ml-4">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Blog</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Case studies</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">How to hire</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Podcasts</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Hr glossary</a>
              </div>
            )}
          </a>
          {/* Company */}
          <a 
            onMouseEnter={() => setShowCompanyMenu(true)} 
            onMouseLeave={() => setShowCompanyMenu(false)} 
            className={`block px-4 py-2 font-semibold hover:text-gray-900 cursor-pointer ${showCompanyMenu ? "text-blue-500" : ""}`}
          >
            Company
            <svg 
              className={`w-4 h-4 inline-block ml-1 transition-transform transform ${showCompanyMenu ? "rotate-90" : "rotate-0"}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
            </svg>
            {showCompanyMenu && (
              <div className="mt-2 ml-4">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">About us</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Careers</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Newsroom</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Contact Us</a>
              </div>
            )}
          </a>
            {/* Add other menu items similarly */}
          <button className="w-[150px] mt-4 border border-transparent rounded-md shadow-sm py-2  inline-flex justify-center items-center text-sm font-medium text-white bg-button-col hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">Request demo</button>

        </div>
      </div>
    </>
  );
};

export default Navbar;
