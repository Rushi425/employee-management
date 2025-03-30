import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function AllTask() {
  const [userData] = useContext(AuthContext); // No need to setUserData in this component
  const employees = userData?.employees || []; // Ensure we get an array

  return (
    <div className='bg-[#1c1c1c] mt-5 p-5 rounded'>
      <div className='bg-red-400 mb-2 py-2 flex justify-between rounded px-4'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h2 className='w-1/5'>Active Task</h2>
        <h2 className='w-1/5'>Completed</h2>
        <h2 className='w-1/5'>Failed</h2>
      </div>
      
      <div className='overflow-auto'>
        {employees.length > 0 ? (
          employees.map((elem, idx) => {
            const { taskCounts = {} } = elem; // Ensure taskCounts is defined
            return (
              <div key={idx} className='mb-5 py-2 flex justify-between rounded px-4'>
                <h2 className='w-1/5 text-white'>{elem.firstName}</h2>
                <h3 className='w-1/5 text-blue-600'>{taskCounts.newTask || 0}</h3>
                <h2 className='w-1/5 text-yellow-300'>{taskCounts.active || 0}</h2>
                <h2 className='w-1/5 text-green-600'>{taskCounts.completed || 0}</h2>
                <h2 className='w-1/5 text-red-600'>{taskCounts.failed || 0}</h2>
              </div>
            );
          })
        ) : (
          <p className="text-white text-center mt-4">No employees found</p>
        )}
      </div>
    </div>
  );
}

export default AllTask;
