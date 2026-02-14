import React, { useState } from "react";
import { useContext } from "react";
import { use } from "react";
import { AuthContext } from "../../context/AuthProvider";
const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newtask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

            setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

    const data = userData
    
    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newtask)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1
        // console.log(elem);
      }
    })
    setUserData(data)
    console.log(data);

    setTaskTitle('')
    setCategory('')
    setAssignTo('')
    setTaskDate('')
    setTaskDescription('')

  }
  return (

    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className="w-full max-w-4xl bg-[#11161D] rounded-2xl p-10
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
          border border-white/10
          shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-xs uppercase tracking-widest text-white/60">
            Task Title
          </h3>
          <input value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value)
            }}
            type="text"
            placeholder="Make a UI design"
            className="px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 
              text-white placeholder:text-white/40
              outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xs uppercase tracking-widest text-white/60">
            Assign To
          </h3>
          <input value={assignTo}
            onChange={(e) => {
              setAssignTo(e.target.value)
            }}
            type="text"
            placeholder="Employee name"
            className="px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 
              text-white outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xs uppercase tracking-widest text-white/60">
            Date
          </h3>
          <input value={taskDate}
            onChange={(e) => {
              setTaskDate(e.target.value)
            }}
            type="date"
            className="px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 
              text-white outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xs uppercase tracking-widest text-white/60">
            Category
          </h3>
          <input value={category}
            onChange={(e) => {
              setCategory(e.target.value)
            }}
            type="text"
            placeholder="Design / Dev / Testing"
            className="px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 
              text-white outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-3">
          <h3 className="text-xs uppercase tracking-widest text-white/60">
            Description
          </h3>
          <textarea value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value)
            }}
            rows="4"
            placeholder="Write task description..."
            className="px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 
              text-white placeholder:text-white/40
              outline-none focus:ring-2 focus:ring-violet-500 resize-none"
          ></textarea>
        </div>

        <div className="md:col-span-2 lg:col-span-3 flex justify-end">
          <button
            className="bg-gradient-to-r from-violet-600 to-indigo-600 
              hover:from-violet-500 hover:to-indigo-500
              text-white font-semibold px-10 py-3 rounded-xl
              transition-all duration-300
              shadow-[0_10px_40px_rgba(139,92,246,0.4)]"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask;


// import React, { useContext, useState } from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const CreateTask = () => {

//     const [userData, setUserData] = useContext(AuthContext)

//     const [taskTitle, setTaskTitle] = useState('')
//     const [taskDescription, setTaskDescription] = useState('')
//     const [taskDate, setTaskDate] = useState('')
//     const [asignTo, setAsignTo] = useState('')
//     const [category, setCategory] = useState('')

//     const [newTask, setNewTask] = useState({})

//     const submitHandler = (e) => {
//         e.preventDefault()

//         setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

//         const data = userData

//         data.forEach(function (elem) {
//             if (asignTo == elem.firstName) {
//                 elem.tasks.push(newTask)
//                 elem.taskCounts.newTask = elem.taskCounts.newTask + 1
//             }
//         })
//         setUserData(data)
//         console.log(data);

//         setTaskTitle('')
//         setCategory('')
//         setAsignTo('')
//         setTaskDate('')
//         setTaskDescription('')

//     }

//     return (
//         <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
//             <form onSubmit={(e) => {
//                 submitHandler(e)
//             }}
//                 className='flex flex-wrap w-full items-start justify-between'
//             >
//                 <div className='w-1/2'>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
//                         <input
//                             value={taskTitle}
//                             onChange={(e) => {
//                                 setTaskTitle(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
//                         />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
//                         <input
//                             value={taskDate}
//                             onChange={(e) => {
//                                 setTaskDate(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
//                         <input
//                             value={asignTo}
//                             onChange={(e) => {
//                                 setAsignTo(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
//                         <input
//                             value={category}
//                             onChange={(e) => {
//                                 setCategory(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
//                     </div>
//                 </div>

//                 <div className='w-2/5 flex flex-col items-start'>
//                     <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
//                     <textarea value={taskDescription}
//                         onChange={(e) => {
//                             setTaskDescription(e.target.value)
//                         }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
//                     <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
//                 </div>

//             </form>
//         </div>
//     )
// }

// export default CreateTask