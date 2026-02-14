// import React, { useState } from "react"
// const TaskList=()=>{
//    return(
//     <div id="tasklist" className="h-[55%] overflow-x-auto flex justify-start items-center flex-nowrap gap-5 w-full  mt-10" >
//          <div className="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl ">
//             <div className="flex justify-between items-center mt-3 ml-2">
//                 <h3 className="bg-red-500 text-sm py-1 px-3 rounded ">High</h3>
//                 <h4 className="text-sm mr-2">12 Feb 2025</h4>
                
//             </div>
//             <h2 className="mt-5 text-xl font-semibold">complete your work</h2>
//             <p className="text-sm mt-2">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolor.
//             </p>
//          </div>
         
//     </div>
//    )
// }

// export default TaskList;



import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  console.log(data);
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-start gap-5 w-full mt-10 px-4"
    >
      {/* <AcceptTask/>
      <NewTask/>
      <CompleteTask/>
      <FailedTask/> */}

      
      {data.tasks.map((elem,idx)=>{

if(elem.newTask){
  return <NewTask  key={idx} data={elem}/>
 }
         if(elem.active){
          return <AcceptTask key={idx} data={elem}/>
         }

         if(elem.completed){
          return <CompleteTask key={idx} data={elem}/>
         }
         if(elem.failed){
          return<FailedTask key={idx} data={elem}/>
         }
      })}

    </div>
  );
};

export default TaskList;


