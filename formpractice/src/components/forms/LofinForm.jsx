import React from "react";
import Image from "../../assets/img/My.jpg";

const LofinForm = () => {
  return (
    <div className="h-[100vh] grid place-items-center">
      <div className="w-[80%] h-[90%] flex shadow-lg">
        <div className="w-1/2 h-full">
          <img className="w-full h-full" src={Image} alt="" />
        </div>
        <div className="w-1/2 ">
          <h1 className="text-6xl"> Login</h1>
          <form action="" className="m-10 flex flex-col">
            <span>username</span>
            <input
              className="w-full border-b-2 p-3 border-black"
              type="text"
              placeholder="Enter your id"
              name="id"
            />
            <span>password</span>
            <input
              className="w-full border-b-2 p-3 border-black"
              type="password"
              placeholder="Enter your password"
              name="password"
            />

            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
              Login
            </button>
          </form>
          <span className="underline">Not Register? Click Here</span>
        </div>
      </div>
    </div>
  );
};

export default LofinForm;
