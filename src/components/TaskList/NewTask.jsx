import React from "react";

const NewTask=({data}) => {
    return(

        <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-white text-xs py-1 px-3 rounded-lg font-semibold">
            {data.category}
          </h3>

          <h4 className="text-xs text-gray-800 font-medium">
            {data.taskDate}
          </h4>
        </div>
        <h2 className="mt-4 text-xl font-semibold leading-tight">
          {data.taskTitle}
        </h2>
        <p className="text-sm mt-2 text-gray-900">
          {data.taskDescription}
        </p>
        <div className="mt-4">
            <button className="bg-yellow-500 py-1 px-2 text-sm">Accept Task</button>
        </div>
      </div>
    )
}

export default NewTask;