"use client";
import React, { useRef } from "react";

import Topbar from "@/components/top-bar";
import Sidebar from "@/components/side-bar";

import Career from "@/pages/career";
import Skills from "@/pages/skills";
import Contact from "@/pages/contact";
import Projects from "./pages/projects";
import Aboutme from "./pages/aboutme";

const App = () => {
  function onAboutScroll(e: any) {
    e.preventDefault();
  }

  return (
    <div className="flex gap-8 p-4">
      <div className="sticky top-4 h-[95svh] lg:h-[95vh] w-[12%] hidden md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-5 w-full md:[88%] overflow-x-clip h-full">
        <Topbar />

        <div className="flex flex-col gap-5">
          <section className="h-[98svh] snap-end" onScroll={onAboutScroll}>
            <Aboutme />
          </section>
          <section
            className="flex flex-col gap-5"
            style={{
              scrollSnapAlign: "start",
            }}
          >
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
