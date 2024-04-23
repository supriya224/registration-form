import React from "react";
import { Link } from "react-router-dom";

const MainComponent = () => {
  return (
    <section className="w-full min-h-screen bg-gray-200 items-bottom">
      <div className="container mx-auto w-fit items-center text-center flex flex-col min-h-screen justify-center">
        <h4 className="text-2xl font-bold">Welcome to PopX</h4>
        <p className="px-16 py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="flex flex-col gap-3">
          <button className="bg-indigo-600 w-full px-16 py-3 rounded-lg text-white">
         
            <Link to="/signup"> Create Account</Link>   
          </button>
          <button className="bg-purple-300  w-fit px-16 py-3 rounded-lg">
            Already registered?<Link to="/login"> <span>Login</span></Link> 
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
