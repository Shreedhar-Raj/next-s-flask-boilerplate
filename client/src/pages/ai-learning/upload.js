import Sidebar from '@/components/Sidebar'
import React from 'react'
import { useState } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TopNavbar from '@/components/TopNav';

function Upload() {
  return (
      <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full h-screen'>
        <TopNavbar className='max-w-100' />
      <div className='flex justify-center h-full  w-full oveflow-hidden items-center'>
      <div className=''>
        <button className='bg-orange-300 items-center rounded-xl p-5 relative border border-2 border-orange-400'>Upload File  
         <UploadFileIcon className='pl-1' />
        </button>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Upload