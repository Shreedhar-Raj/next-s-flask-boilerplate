import LongCard from '@/components/LongCard'
import Sidebar from '@/components/Sidebar'
import TopNavbar from '@/components/TopNav'
import React from 'react'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function index() {
  const page  = {
    page: "AI Learning"
  }
  const ainotes = {
    title: "AI Notes Generator",
    description: "Create interesting and useful notes with AI",
    component: <SmartToyIcon className='text-5xl text-[#197878]' />
  }
  const summary = {
    title: "AI Note Summary Generatr",
    description: "Create interesting and useful summaries with AI",
    component: <NoteAltIcon className='text-5xl text-[#197878]' />
  }
  const quiz = {
    title: "AI Note Question Generator",
    description: "Create interesting and useful questions with AI",
    component: <HelpCenterIcon className='text-5xl text-[#197878]' />
  }
  const peer = {
    title: "Find Peers!",
    description: "Find peers to study with!",
    component: <AccountCircleIcon className='text-5xl text-[#197878]' />
  }
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full relative h-screen'>
        <TopNavbar data={page} />
        <div className="flex justify-center w-full">
        <div className='gap-y-5'>
        <LongCard data={ainotes} />
        <LongCard data={summary} />
        <LongCard data={quiz} />
        <LongCard data={peer} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default index