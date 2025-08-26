import React, { useEffect } from 'react'

const AddModal = ({ isOpen, onClose}) => {

    useEffect (() => {
         if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // cleanup just in case
    return () => document.body.classList.remove("overflow-hidden");

    },[isOpen]);




    if (!isOpen) return null;
  return (
    <div className='fixed inset-0 flex px-4 z-50 bg-black/40 backdrop-blur-sm justify-center items-center'>
        <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          X
        </button>

        <h2 className="text-xl font-semibold mb-4">Login First!</h2>

        {/* Content */}
        <div>Sample</div>
      </div>
    </div>
  )
}

export default AddModal