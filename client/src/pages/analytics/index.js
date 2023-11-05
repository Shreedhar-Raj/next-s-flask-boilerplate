import React from 'react'
import TopNavbar from '@/components/TopNav'
import Sidebar from '@/components/Sidebar'

function index() {
  const page = {
    page: "Analytics"
  }
  return (
      <div className="flex">
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