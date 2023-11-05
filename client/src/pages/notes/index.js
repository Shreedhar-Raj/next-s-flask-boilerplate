import PageCard from '@/components/PageCard'
import Sidebar from '@/components/Sidebar'
import TopNavbar from '@/components/TopNav'
import React from 'react'

function index() {
  const page = {
    page: "Notes"
  }
  const data = {
    title: "English Literature.pdf",
    description: "Notes on the Merchant of Venice",
    action: "Download"
  }
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className=' w-full relative h-screen'>
        <TopNavbar data={page} />
        <div className='p-7 gap-x-7 grid-cols-3 grid-rows-3'>
          <div>
          <PageCard data={data} />
          <PageCard data={data} />
          <PageCard data={data} />
          <PageCard data={data} />
          </div>
          <div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default index