"use client";

import React from "react";

import Topbar from "@/components/top-bar";
import Sidebar from "@/components/side-bar";

import Career from "@/pages/career";
import Skills from "@/pages/skills";
import Contact from "@/pages/contact";
import Projects from "./pages/projects";
import Aboutme from "./pages/aboutme";

const App = () => {
  return (
    <div className="flex gap-8 p-4">
      <div className="sticky top-4 h-[95svh] lg:h-[95vh] w-[12%] hidden md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-5 w-full md:[88%] overflow-x-clip h-full max-h-[95vh] overflow-hidden">
        <Topbar />

        <div className="flex flex-col gap-5 overflow-y-scroll overflow-x-clip h-[95%] snap-mandatory snap-y no-scrollbar">
          <section className="h-[100svh] snap-start mb-3">
            <Aboutme />
          </section>
          <section className="flex flex-col gap-5 snap-start">
            <Career />
            <Skills />
            <Projects />
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
