import React from 'react'

function time() {
  return (
    <div>
        <div className='flex items-center justify-center w-screen h-screen'>
            <div>
            <h1 className='text-2xl'>How much time are you willing to spend every day? eg-2h</h1>
            <input className='w-full border-b-2 outline-0 border-orange-400 text-2xl text-center pt-10' placeholder='chaddha in paris' />
            </div>
        </div>
    </div>
  )
}

export default time