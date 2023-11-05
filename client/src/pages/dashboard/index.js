import Sidebar from '@/components/Sidebar';
import TopNavbar from '@/components/TopNav';
import React from 'react'
import { useState } from 'react';

import {NewsApi} from 'newsapi'
function Dashboard() {
  const page = {
    page: "Dashboard",
  }
const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Notifications", src: "Chat" },
    { title: "Learning Paths", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "AI Learning", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Notes ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div>
      <div className='flex'>
        <div >
          <Sidebar />
        </div>
        <div className=' w-full relative h-screen'>
        <TopNavbar data={page} />
        
      </div>
      </div>
    </div>
  
  )
}

export default Dashboard