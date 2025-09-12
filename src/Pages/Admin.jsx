import React, { useEffect, useState } from "react";
import Wrapper from "../Components/Wrapper.jsx";
import TopWrapper from "../Components/TopWrapper.jsx";
import BlogContainer from "../Container/BlogContainer.jsx";
import AddModal from "../Modal/AddModal.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import AllBlogs from "./AllBlogs.jsx";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const removeToken = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <TopWrapper leftIcon="ri-logout-circle-line" leftClick={removeToken} />

      <div className="grid w-full h-auto  lg:grid-cols-[1fr_auto] lg:p-4 lg:gap-2">
        <Wrapper
          title="Admin Panel"
          className="min-h-screen mt-0 lg:rounded-xl pb-4"
          iconClass2="ri-apps-2-add-line cursor-pointer"
          openModal={() => setIsOpen(true)}
        >
          <AllBlogs/>
        </Wrapper>
        <AddModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      </div>
    </>
  );
};

export default Admin;
