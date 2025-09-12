import React from "react";

const Confirmation = ({deleteMe, isdelete, notDelete}) => {

    if (!isdelete) return null;
  return (
    <div className="fixed inset-0 flex px-4 z-50 bg-black/40 backdrop-blur-sm justify-center items-center">
      <div className="bg-white  p-6 rounded-2xl shadow-lg flex flex-col justify-center w-96 relative">

        <h3>Are you sure you want to delete this?</h3>
        <div className="flex justify-center items-center gap-2 mt-4">
             <button  className="border-[2px] bg-blue-200 rounded-xl border-muted px-4 py-1" onClick={notDelete}>NO</button>
            <button className="border-[2px] bg-red-500 rounded-xl border-muted px-4 py-1" onClick={deleteMe}>YES!</button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
