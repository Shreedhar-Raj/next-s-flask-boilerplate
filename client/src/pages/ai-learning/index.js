import LongCard from '@/components/LongCard'
import Sidebar from '@/components/Sidebar'
import TopNavbar from '@/components/TopNav'
import React from 'react'
import SmartToyIcon from '@mui/icons-material/SmartToy';

function index() {
  const page  = {
    page: "AI Learning"
  }
  const ainotes = {
    title: "AI Notes Generator",
    description: "Create interesting and useful notes with AI",
    component: <SmartToyIcon className='text-5xl text-[#197878]' />
  }
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full relative h-screen'>
        <TopNavbar data={page} />
        <div>
        <LongCard data={ainotes} />
        </div>
      </div>
    </div>
  )
}

export default index