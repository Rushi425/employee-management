import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

function TaskList({data}) {
  // console.log(data)data={data};
  

  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto p-5 flex-nowrap gap-10 items-center justify-start w-full py-5 flex flex-row mt-10 '>
        {/* <AcceptTask  />
        <NewTask  />
        <CompleteTask   />
        <FailedTask  /> */}
        {data.tasks.map((element, idx) =>{
          if(element.active){
            return <AcceptTask key={idx} data={element} />
          }
          if(element.newTask){
            return <NewTask key={idx} data={element}/>
          }
          if(element.completed){
            return <CompleteTask key={idx} data={element}/>
          }
          if(element.failed){
            return <FailedTask key={idx} data={element}/>
                    }
        }) }
    </div>
    
  )
}

export default TaskList
