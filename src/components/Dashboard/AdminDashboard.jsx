
import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-screen bg-[#0B0F14] text-white">
      <Header changeUser={props.changeUser}/>
      <CreateTask/> 
      <AllTask/>
      
    </div>
  );
};

export default AdminDashboard;
