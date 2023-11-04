import React from 'react';

const TopNavbar = () => {
  return (
    <nav className="p-4 border-b overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className=" font-bold text-xl">Your Logo</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className=" hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className=" hover:underline">About</a>
            </li>
            <li>
              <a href="#" className=" hover:underline">Services</a>
            </li>
            <li>
              <a href="#" className=" hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
