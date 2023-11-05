import NoImageCard from '@/components/NoImageCard'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import React from 'react'

function index() {
  const notifications = {
    title: "Welcome to Study App",
    text: "nice"
  }
  const page  = {
    page: "Notifications",
  }
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full relative h-screen'>
        <TopNav data={page} className="border-b max-w-100" />
        <NoImageCard data={notifications} />
        
      </div>
    </div>
  )
}

export default index