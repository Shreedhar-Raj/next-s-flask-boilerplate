import Sidebar from '@/components/Sidebar'
import TopNavbar from '@/components/TopNav'
import { Schedule, ScheduleTwoTone } from '@mui/icons-material'
import React from 'react'

function index() {
  const page ={
    page: "Schedule"
  }
  const Schedule = ['DAY 1:\nSTUDY SESSION: 8:00 AM - 10:00 AM, Algebra \nBREAK: 10:00 AM - 10:30 AM \nEXTRACURRICULAR: 10:30 AM - 11:30 AM, Soccer \nSTUDY SESSION: 11:30 AM - 1:30 PM, Biology \nEND OF DAY TEST: 1:30 PM - 2:00 PM ', 'DAY 2:\nSTUDY SESSION: 8:00 AM - 10:00 AM, World War II \nBREAK: 10:00 AM - 10:30 AM \nEXTRACURRICULAR: 10:30 AM - 11:30 AM, Piano \nSTUDY SESSION: 11:30 AM - 1:30 PM, Algebra \nEND OF DAY TEST: 1:30 PM - 2:00 PM ', 'DAY 3:\nSTUDY SESSION: 8:00 AM - 10:00 AM, Biology \nBREAK: 10:00 AM - 10:30 AM \nSTUDY SESSION: 10:30 AM - 12:30 PM, World War II \nEND OF DAY TEST: 12:30 PM - 1:00 PM ', 'DAY 4:\nSTUDY SESSION: 8:00 AM - 10:00 AM, Algebra \nBREAK: 10:00 AM - 10:30 AM \nEXTRACURRICULAR: 10:30 AM - 11:30 AM, Soccer \nSTUDY SESSION: 11:30 AM - 1:30 PM, Biology \nEND OF DAY TEST: 1:30 PM - 2:00 PM ', 'DAY 5:\nSTUDY SESSION: 8:00 AM - 10:00 AM, World War II \nBREAK: 10:00 AM - 10:30 AM \nSTUDY SESSION: 10:30 AM - 12:30 PM, Algebra \nEND OF DAY TEST: 12:30 PM - 1:00 PM ', 'DAY 6:\nSTUDY SESSION: 8:00 AM - 10:00 AM, Biology \nBREAK: 10:00 AM - 10:30 AM \nSTUDY SESSION: 10:30 AM - 12:30 PM, World War II \nEND OF DAY TEST: 12:30 PM - 1:00 PM ', 'DAY 7:\nSTUDY SESSION: 8:00 AM - 10:00 AM, Science Unit Test Preparation \nBREAK: 10:00 AM - 10:30 AM \nSTUDY SESSION: 10:30 AM - 12:30 PM, History Midterm Preparation \nEND OF DAY TEST: 12:30 PM - 1:00 PM']
  return (
    <>
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className=' w-full relative h-screen'>
        <TopNavbar data={page} />

        {Schedule.map((schedule, index) => (
          <div className='p-7 m-7 border border-[#197878] w-fit pr-6 rounded-lg shadow-lg  '>
      <h1 className='text-xl font-bold mb-7 '>DAY {index+1}</h1>
      <ul className='ml-5'>
        
        {schedule}
      
      </ul>


       </div>
         ))}
      </div>

    </div>
    </>
  )
}

export default index