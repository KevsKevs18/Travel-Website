import React, { useEffect, useState } from 'react'
import { ClipLoader } from "react-spinners";
import {useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose}) => {

    useEffect (() => {
         if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // cleanup just in case
    return () => document.body.classList.remove("overflow-hidden");

    },[isOpen]);


    // login function
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isSuccess, setisSuccess] = useState(false);
    const [isLoading, setisLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://travel-api-8ud3.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", "sampleToken");
        setTimeout(() => {
            setMessage("✅ Login successful!");
            setisLoading(false);
        }, 2000);

        setTimeout(() => {
            navigate("/features/admin");
            onClose();
        }, 4000);
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage("⚠️ Server error, try again later.");
    }
  };

  const eraseCred = () => {
        setUsername("");
        setPassword("");
        setMessage("");
        setisSuccess(false);
        
  };




    // return if false
    if (!isOpen) return null;
  return (
    <div className='fixed inset-0 flex px-4 z-50 bg-black/40 backdrop-blur-sm justify-center items-center'>
        <div className="bg-white  p-6 rounded-2xl shadow-lg flex flex-col justify-center w-96 relative">
        {/* Close button */}
        <button
          onClick={()=> { eraseCred(); onClose();}}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          X
        </button>
    {!isSuccess && (
       <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-2xl shadow-md w-full"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login First</h2>
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border shadow-darkShadow rounded-xl mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border shadow-darkShadow rounded-xl mb-3"
        />

        <button
          type="submit"
          className={`w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 ${isLoading ? "bg-muted pointer-events-none cursor-none" : "none"}  `}
          onClick={()=> setisLoading(true)}
        >
          Login
        </button>

        {message && <p className="mt-3 text-center">{message}</p>}
      </form>
      )}
    
     
      {isLoading && 
      <div className='flex w-full justify-center items-center'>
      <ClipLoader color="#36d7b7" size={50} />
      </div>
      }
      
      </div>
      
    </div>
  )
}

export default LoginModal