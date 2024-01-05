import React from "react";

const Aboutme = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full place-content-center">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-black text-3xl">{`Hi, I'm Vignesh`}</h1>
        <p className="font-semibold max-w-[300px]">
          Making designs a real world entites thinking about improving users
          interaction while also thinking about the best approach to the
          problem. A guy who thinks about writing less code (DRY) with the same
          amount of functionality and also same amount of performance.
        </p>
      </div>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/me.png"
          alt="Vignesh"
          className="w-[35em] mb-0 mt-auto"
        />
      </div>
    </div>
  );
};

export default Aboutme;
