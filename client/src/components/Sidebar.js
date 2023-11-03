// Imports
import React from 'react'
import { useState } from 'react';
import WindowIcon from '@mui/icons-material/Window';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import TimelineIcon from '@mui/icons-material/Timeline';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Sidebar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", component: <WindowIcon className='text-orange-400' /> },
    { title: "Notifications", component: <NotificationsActiveIcon className='text-orange-400' /> },
    { title: "Learning Paths", component:<SchoolIcon className='text-orange-400' /> , gap: true },
    { title: "Schedule ", component: <AccessTimeFilledIcon className='text-orange-400' /> }, 
    { title: "AI Learning", component: <SmartToyIcon className='text-orange-400' /> },
    { title: "Analytics", component: <TimelineIcon className='text-orange-400' /> },
    { title: "Notes ", component: <DescriptionIcon className='text-orange-400' /> , gap: true },
    { title: "Setting", component: <SettingsIcon className='text-orange-400' /> },
  ];
  return (
  
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } border-r border-black h-screen p-5 bg pt-8 relative duration-300`}
      >
        <KeyboardBackspaceIcon
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 bg-white top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Study Sage
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-orange-100 border border-orange-100 transition-0.5s text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && ""
              } `}
            >
              {Menu.component}
              <span className={`${!open && "hidden"} text-black text-lg origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
    
      </div>
    </div>
  )
}

export default Sidebar