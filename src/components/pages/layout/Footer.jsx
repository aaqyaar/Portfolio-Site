import React from "react";
import { FaSlackHash } from "react-icons/fa";
function Footer() {
  return (
    <div
      className="bg-gray-800 text-gray-200 flex flex-col items-center justify-center py-8 "
      id="footer"
    >
      <FaSlackHash className="w-20 h-20 mb-4" />
      <h1 className="text-lg md:text-2xl font-poppins font-semibold tracking-wider mb-1">
        Copyright &copy; 2022 All rights reserved
      </h1>
    </div>
  );
}

export default Footer;
