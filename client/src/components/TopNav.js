import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TopNavbar = () => {
  return (
    <nav className="p-4 border-b overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className=" font-bold text-xl"></div>
          <ul className="flex space-x-4">
            <li>
              <AccountCircleIcon />
            </li>
            <li>
              <a href="#" className=" hover:underline">Random User</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
