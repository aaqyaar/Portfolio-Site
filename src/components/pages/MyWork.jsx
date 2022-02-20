import React from "react";

import Images from "./layout/Images";
const MyWork = () => {
  const imagesWork = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    },
  ];

  return (
    <>
      <section id="MyWork" className="max-w-full mt-16 bg-gray-800">
        <div>
          <div
            id="content"
            className="flex flex-col mb-16 pt-16 items-center justify-center"
          >
            <h1 className="border-b-4 rounded tracking-widest text-4xl  font-montserrat font-semibold text-gray-100 border-gray-700 mb-4 inline">
              My Work
            </h1>
            <p className=" md:text-xl text-sm md:w-1/2 text-center text-gray-100 tracking-wider font-poppins">
              I’ve had the pleasure of working with multiple companies,
              designing and implementing both frontend and backend.
            </p>
          </div>
          <div
            id="images"
            className="grid grid-cols-1 lg:grid-cols-3 mx-0  md:grid-cols-2 pb-20 lg:mx-48 md:mx-20 gap-y-6 xl:gap-4"
          >
            {imagesWork.map((image) => (
              <Images img={image.img} key={image.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyWork;
