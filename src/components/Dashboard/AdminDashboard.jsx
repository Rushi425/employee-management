import React from 'react';
import Header from '../others/header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

function AdminDashboard(props) {
  return (
    <div className="bg-[#1c1c1c] h-screen w-full ">
      <Header  changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>

      
    </div>
  );
}

export default AdminDashboard;
