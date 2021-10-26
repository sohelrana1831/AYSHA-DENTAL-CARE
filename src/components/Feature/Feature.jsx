import React from "react";

const Feature = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-secondary">
        <div className="container grid lg:grid-cols-3 grid-cols-1 gap-6 text-white">
          <div className="flex lg:px-8  lg:py-8 pt-12">
            <div>
              <i className="fas fa-teeth-open text-6xl py-6 px-4"></i>
            </div>
            <div>
              <h1 className="text-md pb-2 uppercase font-bold leading-snug text-white hover:opacity-75">
                Dental Implants
              </h1>
              <p>
                Dental implants are the closest you can get to healthy,
                beautiful and natural teeth.
              </p>
            </div>
          </div>
          <div className="flex lg:px-8 lg:py-8 py-2">
            <div>
              <i className="fas fa-tooth text-6xl py-6 px-4"></i>
            </div>
            <div>
              <h1 className="text-md pb-2 uppercase font-bold leading-snug text-white hover:opacity-75">
                Parodontosis Care
              </h1>
              <p>
                Timely diagnosed and treated parodontosis disease can save you
                from tooth loss.
              </p>
            </div>
          </div>
          <div className="flex lg:px-8 lg:py-8 py-2">
            <div>
              <i className="fas fa-teeth text-6xl py-6 px-4"></i>
            </div>
            <div>
              <h1 className="text-md pb-2 uppercase font-bold leading-snug text-white hover:opacity-75">
                Teeth Whitening
              </h1>
              <p>
                Teeth Whitening improve how your teeth look by removing stains
                and discoloration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
