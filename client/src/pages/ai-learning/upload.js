import Sidebar from '@/components/Sidebar'
import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TopNavbar from '@/components/TopNav';
import { supabase } from '@/utils/supabaseClient.mjs';

function Upload() {
  var alertFile = null
  
  async function submit(file) {
    
  }
  return (
      <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full h-screen'>
        <TopNavbar className='max-w-100' />
      <div className='flex justify-center h-full  w-full oveflow-hidden items-center'>
      <div className=''>
        <input type="file" id="myFile" name="filename" onChange={(e)=>  {
          alertFile = e.target.files[0]
        }}/>
        <button onClick={(e) => {
           let myuuid = uuidv4();
    const file_name = localStorage.getItem('session').concat('/').concat(myuuid)
    supabase
    .storage
    .from('forumNotes')
    .upload(file_name, alertFile, {
        cacheControl: '3600',
        upsert: false
    }).then((res) => {
      if (res.error != null) {
        console.log(error)
      }
      else{
        alert("File Uploaded")
        window.location.href = "/dashboard"
      }

    })
        }}className='bg-orange-300 items-center rounded-xl p-5 relative border border-2 border-orange-400'>Upload File  
         <UploadFileIcon className='pl-1' />
        </button>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Upload