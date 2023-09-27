import React from "react";
const Unsplash = ({ children }) => {
  return (
    <div className="flex items-center pt-10">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-center text-4xl mb-10"> Unsplash </h1>
        {children}
      </div>
    </div>
  );
};

export default Unsplash;
