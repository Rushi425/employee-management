import React from 'react'

function TaskNumber({data}) {
    console.log(data);
    
    
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='text-white w-[45%] py-10 px-10 rounded-2xl bg-red-400'>
            <h2 className='text-3xl '>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>active</h3>
        </div>
        <div className='text-white w-[45%] py-10 px-10 rounded-2xl bg-blue-400'>
            <h2 className='text-3xl '>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>newTask</h3>
        </div>
        <div className='text-white w-[45%] py-10 px-10 rounded-2xl bg-green-400'>
            <h2 className='text-3xl '>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>completed{data.completed}</h3>
        </div>
        <div className='text-white w-[45%] py-10 px-10 rounded-2xl bg-violet-400'>
            <h2 className='text-3xl '>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>failed</h3>       
        </div>
        
      
    </div>
  )
}

export default TaskNumber
