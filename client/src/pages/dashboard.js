import Sidebar from '@/components/Sidebar';
import React from 'react'

import { useState } from 'react';


function Dashboard() {
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
    <Sidebar />
  
  )
}

export default Dashboard