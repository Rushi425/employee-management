import React from 'react'

function CompleteTask({data}) {
  // console.log();
  
  
  
  return (
    <div className='flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-2xl '>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-400 text-sm px-3 py-1 rounded'> {data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
          <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='mt-3'>
                <button className='w-full bg-amber-700'>Completed</button>
            </div>
        </div>
  )
}

export default CompleteTask
