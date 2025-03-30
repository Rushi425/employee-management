import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function CreateTask() {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState('');
  const [date, setdate] = useState('');
  const [assignTo, setassignTo] = useState('');
  const [category, setcategory] = useState('');
  const [description, setdescription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      description,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    if (!userData || !userData.employees) {
      console.error("Employees data is missing.");
      return;
    }

    // Update employee tasks
    const updatedEmployees = userData.employees.map((employee) => {
      if (employee.firstName === assignTo) {
        return {
          ...employee,
          tasks: [...(employee.tasks || []), newTask],
          taskCounts: {
            ...employee.taskCounts,
            newTask: (employee.taskCounts?.newTask || 0) + 1,
          },
        };
      }
      return employee;
    });

    // Update context and local storage
    const updatedData = { ...userData, employees: updatedEmployees };
    setUserData(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedData));

    // Reset form
    settaskTitle('');
    setdate('');
    setassignTo('');
    setcategory('');
    setdescription('');
  };

  return (
    <div className="text-white">
      <form className="flex w-full mt-5 bg-blue-200 items-start justify-between p-5 rounded-lg" onSubmit={submitHandler}>
        <div className="w-1/2 space-y-4">
          <div>
            <h3 className="mb-2">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
              type="text"
              placeholder="Make UI design"
              className="w-full p-2 bg-[#2c2c2c] text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <h3 className="mb-2">Date</h3>
            <input
              value={date}
              onChange={(e) => setdate(e.target.value)}
              type="date"
              className="w-full p-2 bg-[#2c2c2c] text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <h3 className="mb-2">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setassignTo(e.target.value)}
              type="text"
              placeholder="Employee Name"
              className="w-full p-2 bg-[#2c2c2c] text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <h3 className="mb-2">Category</h3>
            <input
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc."
              className="w-full p-2 bg-[#2c2c2c] text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col space-y-4 pl-5">
          <div>
            <h3 className="mb-2">Description</h3>
            <textarea
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              placeholder="Design a UI for the website"
              className="w-full p-2 h-32 bg-[#2c2c2c] text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
