import Sidebar from "@/components/side-bar";
import Topbar from "@/components/top-bar";
import React from "react";
import Career from "@/pages/career";
import Skills from "@/pages/skills";
import Contact from "@/pages/contact";

const App = () => {
  return (
    <div className="flex gap-8 p-4">
      <div className="sticky top-4 h-[100vh] lg:h-[95vh]">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-5 ">
        <Topbar />
        <Career />
        <Skills />

        <Contact />
      </div>
    </div>
  );
};

export default App;
