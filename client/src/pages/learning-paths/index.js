
import Sidebar from '@/components/Sidebar'
import TopNavbar from '@/components/TopNav'
import PageCard from '@/components/PageCard';

import React from 'react'

function index() {
  const page={
    page: "Learning Paths"
  }
  const courses = [
    {
      title: "Something",
    description: "nice",
    action: "Take Course"
    },
    {
      title: "Something",
    description: "nice",
    action: "Take Course"
    }
  ]
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className=' w-full relative h-screen'>
        <TopNavbar data={page} />
        <div className="p-3">
        <PageCard className="p-3 shadow-2xl" data={courses} />
        </div>
      </div>
    </div>
  )
}

export default index