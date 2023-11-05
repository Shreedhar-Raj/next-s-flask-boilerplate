import Sidebar from '@/components/Sidebar'
import TopNavbar from '@/components/TopNav'
import React from 'react'

function index() {
  const page  = {
    page: "AI Learning"
  }
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className=' w-full relative h-screen'>
        <TopNavbar data={page} />
        
      </div>
    </div>
  )
}

export default index