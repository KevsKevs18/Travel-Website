import React from "react";
import { useState, useEffect } from "react";
import BlogWrapper from "../Components/BlogWrapper.jsx";
import { ClipLoader } from "react-spinners";
import Confirmation from "../Modal/Confirmation.jsx";
import AddModal from "../Modal/AddModal.jsx";
import { useParams, useLocation } from "react-router-dom";

const BlogContainer = ({ iconDelete }) => {
  const { category } = useParams();
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isdelete, setIsDelete] = useState(false);
  const [deleteLoading, setdelLoading] = useState(false);
  const [isDeleteIcon, setIcon] = useState(false);
  const [isdeleteId, setdeleteId] = useState(null);
  

  const location = useLocation();

  useEffect (()=>{
     if (location.pathname === "/features/admin"){
      setIcon(true);
     }
  },[]);

  //get blogs by category
  const autoSync = () => {

    if (location.pathname === "/features/admin"){
      
    fetch("https://travel-api-8ud3.onrender.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setisLoading(false);
      })
      .catch((err) => console.error("❌ Error fetching images:", err));
    }
    else {
      fetch(`https://travel-api-8ud3.onrender.com/blogs/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setisLoading(false);
      })
      .catch((err) => console.error("❌ Error fetching images:", err));
    }
  };

  useEffect(() => {
    autoSync();
  }, [category]);


  const imgLoad = () => {
    setisLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://travel-api-8ud3.onrender.com/blogs/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      setTimeout(() => {
      alert(data.message);
      }, 500);
   
      // Refresh list after delete
      setdelLoading(false);
      autoSync();
    } catch (err) {
      alert("❌ Error deleting image");
      setdelLoading(false);
      setisLoading(false);
    }
  };

  const formatted = images.map(img => ({
  _id: img._id,
  title: img.title,
  description: img.description,
  category: img.category,
  date: img.date,
  imageUrl: img.imageUrl,
}));





  return (
    <>
      {isLoading ? (
        <div className="inset-0 w-full h-full flex items-center justify-center">
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : (
        <div className="relative w-full min-h-[25rem] px-4 py-2 grid grid-rows-auto md:px-16">
          {formatted.map((img) => (
            
            <BlogWrapper
              keyProps={img._id}
              deleteIcon={isDeleteIcon ? "ri-delete-bin-3-line" : "none"}
              title={img.title}
              description={img.description}
              imageUrl={img.imageUrl}
              handleDelete={() => {setdeleteId(img._id); setIsDelete(true);}}
              imgLoad={imgLoad}
              imgDate={img.date}
              autoSync={() => autoSync()}
            />
             
           
          ))}
        </div>
      )}
      {isdelete && 
      <Confirmation notDelete={()=> setIsDelete(!isdelete)} isdelete={isdelete} deleteMe={()=>{ handleDelete(isdeleteId); setIsDelete(!isdelete); setdelLoading(true);}}/>
      }
      {deleteLoading && 
       <div className="fixed inset-0 flex px-4 z-50 bg-black/40 backdrop-blur-sm justify-center items-center">
        <ClipLoader  color="#36d7b7" size={50}/>
       </div>
      }
      <AddModal autoSync={autoSync()}/>
    </>
  );
};

export default BlogContainer;
