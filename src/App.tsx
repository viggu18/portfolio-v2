import React from "react";

import Topbar from "@/components/top-bar";
import Sidebar from "@/components/side-bar";

import Career from "@/pages/career";
import Skills from "@/pages/skills";
import Contact from "@/pages/contact";
import Projects from "./pages/projects";

const App = () => {
  return (
    <div className="flex gap-8 p-4">
      <div className="sticky top-4 h-[95svh] lg:h-[95vh] w-[12%]">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-5 w-[88%] overflow-x-clip">
        <Topbar />

        <Career />
        <Skills />
        <Projects />

        <Contact />
      </div>
    </div>
  );
};

export default App;
