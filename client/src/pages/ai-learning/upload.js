import Sidebar from '@/components/Sidebar'
import React from 'react'
import { useState } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';

function Upload() {
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='flex justify-center items-center h-screen w-screen'>
      <div className='flex'>
        <button className='bg-green-300 items-center rounded-xl p-6 border border-2 border-green-400'>Upload File  
         <UploadFileIcon className='pl-1' />
        </button>
      </div>

      </div>
    </div>
  )
}

export default Upload