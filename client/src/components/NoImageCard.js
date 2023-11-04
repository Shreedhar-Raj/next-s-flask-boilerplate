import React from 'react'

const NoImageCard = (props) => {
  return (
    <div className='flex justify-center w-full relative pt-6'>
        <div className='w-200px p-5 border shadow-md  h-40 border rounded-xl'>
          <h1 className='text-xl'>{props.data.title}</h1>
          <p>{props.data.text}</p>
        </div>
      </div>
  )
}

export default NoImageCard