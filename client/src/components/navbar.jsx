import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav>
        <div className="bg-[#121618] flex justify-between px-4 sm:px-8 md:px-16 lg:px-48 lg:w-full lg:h-[100px] h-[50px] relative font-oswald">
          {/* Logo */}
          <div className="text-4xl pt-16">
            <h1 className="text-[#0796EF] lg:pl-[120px] hidden lg:block">
              DEEP <span className="text-white">NET</span>
            </h1>
          </div>

          <div className="text-[#F5F5F5] lg:pt-16 hidden lg:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#HOME">HOME</a>
              </li>
              <li>
                <a href="#MENU">MENU</a>
              </li>
              <li>
                <a href="#MAKE A RESERVATION">MAKE A RESERVATION</a>
              </li>
              <li>
                <a href="#CONTACT US">CONTACT US</a>
              </li>
            </ul>
          </div>

          <div className="lg:hidden flex items-center pt-4">
            <button
              onClick={toggleDropdown}
              className="text-white text-xl"
            >
              ☰
            </button>
          </div>
        </div>

        {isDropdownOpen && (
          <div className="lg:hidden bg-[#121618] text-[#F5F5F5] py-2 px-6">
            <ul className="space-y-4">
              <li>
                <a href="#HOME" onClick={toggleDropdown}>HOME</a>
              </li>
              <li>
                <a href="#MENU" onClick={toggleDropdown}>MENU</a>
              </li>
              <li>
                <a href="#MAKE A RESERVATION" onClick={toggleDropdown}>MAKE A RESERVATION</a>
              </li>
              <li>
                <a href="#CONTACT US" onClick={toggleDropdown}>CONTACT US</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
