import React from "react";

const Aboutme = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full sm:place-content-center overflow-y-clip">
      <div className="flex flex-col items-center justify-center text-center h-full py-16">
        <h1 className="font-black tracking-widest text-4xl md:text-5xl mb-8">{`Hi, I'm Vignesh`}</h1>

        <p className="font-semibold tracking-wide leading-6 max-w-[450px]">
          Making designs a real world entites thinking about improving users
          interaction while also thinking about the best approach to the
          problem. A guy who thinks about writing less code (DRY) with the same
          amount of functionality and also same amount of performance.
        </p>
      </div>

      <div className="flex justify-center items-end h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/me.png" alt="Vignesh" className="h-fit w-[35em]" />
      </div>
    </div>
  );
};

export default Aboutme;
