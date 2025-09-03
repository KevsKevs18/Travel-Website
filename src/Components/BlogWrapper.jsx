import React from "react";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import AddModal from "../Modal/AddModal";

const BlogWrapper = ({ deleteIcon = ""}) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const autoSync = () => {
    fetch("https://travel-api-8ud3.onrender.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setisLoading(false);
      })
      .catch((err) => console.error("❌ Error fetching images:", err));
  };

   useEffect(() => {
      autoSync();

   },[]);

  const imgLoad = () => {
    setisLoading(false);
  };


  const handleDelete = async (id) => {
      try {
        const res = await fetch(`https://travel-api-8ud3.onrender.com/blogs/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        alert(data.message);
  
        // Refresh list after delete
        autoSync();
      } catch (err) {
        alert("❌ Error deleting image");
      }
    };
     

  return (
    <>
    {isLoading ? (
        <div className="inset-0 w-full h-full flex items-center justify-center">
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : (
    <div className="relative w-full min-h-[25rem] px-4 py-2 grid grid-rows-auto md:grid-cols-2">
      {images.map((img) => (
        <div className="w-full h-auto flex flex-col p-2 border-b-[2px] border-muted overflow-x-hidden">
          <div className="w-full h-full">
            <h2 className="font-sans font-bold text-[1.3rem] text-light">
              <span className={`${deleteIcon} cursor-pointer`} onClick={()=> handleDelete(img._id)}> </span>
              {img.title}
            </h2>
            <img
              src={`https://travel-api-8ud3.onrender.com/blogs/${img._id}`}
              alt="beach pic"
              onLoad={imgLoad}
              className="w-full h-[10rem] my-2 rounded-xl"
            />
            <small className="text-muted text-[.7rem]">
              <span className="ri-calendar-line mr-2 text-[1rem]"></span>
              {new Date(img.date).toLocaleDateString("en-PH", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </small>
          </div>
          <div className="w-full h-full">
            <p className="font-sans break-words font-medium text-light mt-2">
              {img.description}
            </p>
          </div>
        </div>
      ))}
      
    </div>
    )}
    <AddModal autoSync={autoSync()}/>
    </>
  );
};

export default BlogWrapper;
