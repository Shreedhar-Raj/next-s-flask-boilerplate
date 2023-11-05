
import Sidebar from '@/components/Sidebar'
import TopNavbar from '@/components/TopNav'
import PageCard from '@/components/PageCard';

import React from 'react'

function index() {
  const page={
    page: "Learning Paths"
  }
  const geography = 
    {
      title: "Something",
    description: "niceadsfgeriugbe4ruighuirgbu4gbui24gbui4gbiu4gbi4gbfergergvge",
    action: "Take Course"
    }
    const history = 
    {
      title: "Something",
    description: "nice",
    action: "Take Course"
    }
  return (
    <div className='flex max-w-screen'>
      <div>
        <Sidebar />
      </div>
      <div className=' w-full relative h-screen'>
        <TopNavbar data={page} />
        <div className="p-3 flex gap-x-4 gap-y-4">
        <PageCard className="p-5 shadow-2xl" data={history} />
        <PageCard className="p-5 shadow-2xl" data={geography} />
        </div>
      </div>
    </div>
  )
}

export default index