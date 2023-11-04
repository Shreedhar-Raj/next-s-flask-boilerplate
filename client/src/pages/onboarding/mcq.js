import React from 'react'
import StartIcon from '@mui/icons-material/Start';

function mcq() {
  return (
    <div>
        <div className='flex items-center justify-center w-screen h-screen'>
            <div>
            <h1 className='text-4xl pb-5'>where is da chaddha?</h1>
            <div className='flex pt-3 items-center'>
                <button className='py-1 px-3 rounded-xl border border-orange-500 text-orange-400 hover:text-white hover:bg-orange-400'>A</button>
                <p className='pl-3'>PARIS</p>
            </div>
            <div className='flex pt-3 items-center'>
                <button className='py-1 px-3 rounded-xl border border-orange-500 text-orange-400 hover:text-white hover:bg-orange-400'>B</button>
                <p className='pl-3'>PARIS</p>
            </div>
            <div className='flex pt-3 items-center'>
                <button className='py-1 px-3 rounded-xl border border-orange-500 text-orange-400 hover:text-white hover:bg-orange-400'>C</button>
                <p className='pl-3'>PARIS</p>
            </div>
            <div className='flex pt-3 items-center'>
                <button className='py-1 px-3 rounded-xl border border-orange-500 text-orange-400 hover:text-white hover:bg-orange-400'>D</button>
                <p className='pl-3'>PARIS</p>
            </div>
            <div className='flex pt-3 items-center'>
                <button className='py-1 items-center px-3 rounded-xl border border-orange-500 text-orange-400 hover:text-white hover:bg-orange-400'>Next Question <StartIcon /></button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default mcq