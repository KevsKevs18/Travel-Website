import React, { useEffect, useState } from 'react'
import { ClipLoader } from "react-spinners";

const AddModal = ({isOpen, onClose, autoSync}) => {

    const [title, setTitle] = useState ("");
   const [file, setFile] = useState(null);
    const [descrip, setDescrip] = useState ("");
    const [message, setMessage] = useState ("");
    const [isLoading, setisLoading] = useState ("");


    useEffect (() => {
        if (isOpen){
            document.body.classList.add("overflow-hidden");
        }
        else{
            document.body.classList.remove("overflow-hidden");
        }

        return ()=> document.body.classList.remove("overflow-hidden");

    },[isOpen]);

    const remove = ()=> {
        setTitle("");
        setDescrip("");
        setMessage("");
        setFile(null);
    }

    const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", descrip);
    formData.append("file", file);

    try {
      const res = await fetch("https://travel-api-8ud3.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      
      setisLoading(true);

      setTimeout (()=> {
        setMessage(data.message);
        setisLoading(false);
      }, 2000);

       setTimeout (()=> {
        
        remove();
   
      }, 3000);
    } catch (err) {
      setMessage("❌ Error uploading file");
    }
  };

    if(!isOpen) return null;
  return (
    <div className='inset-0 fixed flex p-4 z-50 bg-black/40 backdrop-blur-sm justify-center items-center'>
       <div className="bg-white  p-2 rounded-2xl shadow-lg flex flex-col justify-center items-center w-96 relative">
        {/* Close button */}
        <button
          onClick={()=> { remove(); onClose(); autoSync}}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          X
        </button>

        <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full mb-2"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Add Entry!</h2>
        
        <input
          type="text"
          placeholder="Add Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border shadow-darkShadow rounded-xl mb-3"
        />

        <textarea
          type="text"
          placeholder="Tell me about this journey.."
          value={descrip}
          onChange={(e) => setDescrip(e.target.value)}
          className="block w-full h-40 placeholder:top-0 align-top p-2 border shadow-darkShadow rounded-xl mb-3"
        />

        <input
            type="file"
             onChange={(e) => setFile(e.target.files[0])}
            className='w-full my-2 border border-gray-300 rounded-lg text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
             file:rounded-md file:border-0 file:text-sm file:font-semibold 
             file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'

        />

        <button
          type="submit"
          className={`w-full text-white py-2 rounded-xl ${isLoading ? "bg-muted pointer-events-none cursor-none" : "bg-blue-500 hover:bg-blue-600"}}`}
          onClick={()=> setisLoading(true)}
         >
          Save
        </button>

        {message && <p className="mt-3 text-center">{message}</p>}
      </form>
         {isLoading && <ClipLoader/>}
        </div>
       
    </div>
  )
}

export default AddModal;