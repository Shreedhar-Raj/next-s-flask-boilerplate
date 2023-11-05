import Sidebar from '@/components/Sidebar'
import TopNavbar from '@/components/TopNav'
import { Schedule } from '@mui/icons-material'
import React from 'react'

function index() {
  const page ={
    page: "Schedule"
  }
  const Schedule = []
  return (
    <>
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className=' w-full relative h-screen'>
        <TopNavbar data={page} />
         <div className=' justify-center h-full p-12  w-full oveflow-hidden items-center'>
          
       </div>
      </div>

    </div>
    </>
  )
}

export default index