import React from "react";
import Wrapper from "../Components/Wrapper.jsx";
import TopWrapper from "../Components/TopWrapper.jsx";
import BlogContainer from "../Container/BlogContainer.jsx";
import LoginModal from "../Modal/LoginModal.jsx";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AllBlogs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTitle, setIsTitle] = useState("");
  const [isheader, setIsHeader] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const handleAdmin = () => {
    if (localStorage.getItem("token")) {
      navigate("/features/admin");
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (location.pathname === "/features/beach") {
      setIsTitle("Ride to the Shore");
    } else if (location.pathname === "/features/city") {
      setIsTitle("Metro Miles");
    } else if (location.pathname === "/features/road") {
      setIsTitle("Endless Roads");
    } else if (location.pathname === "/features/mountain") {
      setIsTitle("Ride to the Peaks");
    }
    else if (location.pathname === "/features/admin") {
      setIsHeader(false);
    }
  }, []);

  return (
    <>
      {isheader && 
      <TopWrapper
        leftIcon="ri-arrow-left-line"
        rightIcon="ri-admin-line"
        leftClick={() => navigate("/")}
        openModal={() => handleAdmin()}
        className="lg:px-64"
      />
      }
      <div className="grid w-full h-auto  lg:grid-cols-[1fr_auto] lg:p-4 lg:gap-2 lg:px-64">
        <Wrapper
          title={isTitle}
          className="min-h-screen mt-0 lg:rounded-xl pb-4"
          titleClass="font-[Gothic] font-bold text-[1.5rem]"
        >
          <BlogContainer />
        </Wrapper>
      </div>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default AllBlogs;
