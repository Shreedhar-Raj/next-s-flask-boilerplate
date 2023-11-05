import Sidebar from '@/components/Sidebar'
import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TopNavbar from '@/components/TopNav';
import { supabase } from '@/utils/supabaseClient.mjs';

function Upload() {
  var alertFile = null
  const [fileNname, setFileName] = useState('Untitled')

  return (
      <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full h-screen'>
        <TopNavbar className='max-w-100' />
      <div className=' justify-center h-full  w-full oveflow-hidden items-center'>
      
      <div className='flex justify-center h-full  w-full oveflow-hidden items-center'>
        <input type="text" id="myname" className='m-5 border border-black border-15 rounded-lg px-3 py-2 text-black bg-orange-300' name="filename" onChange={(e)=>  {setFileName(e.target.value)}} placeholder='File Name'/>
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
        
      }
    
    
    })
    supabase.from('forumnotes').insert({
      noteid: myuuid,
      title: fileNname,
      createdBy : localStorage.getItem('session'),
    }).then((res) => {
      if (res.error != null) {
        console.log(res.error)
      }
      else{
        console.log("Note Created")
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