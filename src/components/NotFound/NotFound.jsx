import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="bg-gray-500">
        <div className="container text-center mt-8 py-20  ">
          <div className="inline-block align-middle mx-auto ">
            <h1 className="text-9xl text-red-300 font-Poppins">404</h1>
            <h1 className="text-7xl text-white font-Poppins py-2">
              oops! Page not found
            </h1>
            <h1 className="text-2xl text-white font-Poppins">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
