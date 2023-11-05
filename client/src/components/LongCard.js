import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';

const LongCard = (props) => {
  return (
    <div className='max-w-lg h-35 flex rounded-2xl border  p-5'>
        
        <div className='pl-5'>
            <div className="text-xl">{props.data.title}</div>
            <h1>{props.data.description}</h1>
        </div>
    </div>
  )
}

export default LongCard