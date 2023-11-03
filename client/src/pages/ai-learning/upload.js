import Sidebar from '@/components/Sidebar'
import React from 'react'
import { useState } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';

function Upload() {
  return (
    <div>
      <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='flex justify-center items-center h-screen w-screen'>
      <div className=''>
        <h1>nice</h1>
        <button className='bg-orange-300 items-center rounded-xl p-5 border border-2 border-orange-400'>Upload File  
         <UploadFileIcon className='pl-1' />
        </button>
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default Upload