import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import React from 'react'

function index() {
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className=' w-full relative h-screen'>
        <TopNav className="border-b max-w-100" />
        <div className='flex justify-center w-full relative pt-6'>
        <div className='w-200px p-5 border shadow-md  h-40 border rounded-xl'>
          <h1 className='text-xl'>Notification</h1>
          <p>nicenceinncncnthe youf  ddndfnfnfn</p>
        </div>
      </div>
        
      </div>
    </div>
  )
}

export default index