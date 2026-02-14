import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  return (
    <>
      {/* HEADER */}
      <div className="bg-[#1c1c1c] p-5 rounded-xl mt-5 border border-white/10">
        <div
          className="
            bg-gradient-to-r from-violet-600 to-indigo-600
            hover:from-violet-500 hover:to-indigo-500
            mb-3 py-3 px-5
            grid grid-cols-5 items-center text-center
            rounded-lg text-white font-semibold
            shadow-[0_10px_40px_rgba(139,92,246,0.4)]
            transition-all duration-300
          "
        >
          <h2>Employee Name</h2>
          <h3>New Task</h3>
          <h5 className="text-sm bg-black/30 px-3 py-1 rounded-full inline-block mx-auto">
            Active Task
          </h5>
          <h5>Completed</h5>
          <h5>Failed</h5>
        </div>
      </div>

      {/* ROWS */}
      <div className="h-[80%] overflow-auto">
      {userData.map((elem,idx) => {
        return (
          <div key={idx}
            className="
              bg-gradient-to-r from-violet-600 to-indigo-600
              hover:from-violet-500 hover:to-indigo-500
              mb-2 py-3 px-5
              flex justify-between items-center text-center
              rounded-lg text-white font-semibold
              shadow-[0_10px_40px_rgba(139,92,246,0.4)]
              transition-all duration-300
            "
          >
            <h2 className="w-1/5">{elem.firstName}</h2>
            <h3 className="w-1/5">{elem.taskCounts.newTask}</h3>
            <h5 className="w-1/5 text-sm bg-black/20 px-3 py-1 rounded-full">
            {elem.taskCounts.active}
            </h5>
            <h5 className="w-1/5">{elem.taskCounts.completed}</h5>
            <h5 className="w-1/5">{elem.taskCounts.failed}</h5>
          </div>
        );
      })}
      </div>

    </>
  );
};

export default AllTask;





