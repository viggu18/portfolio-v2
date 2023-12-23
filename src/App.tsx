import TopBar from "@/components/top-bar";
import React, { Fragment } from "react";
import Career from "@/pages/career";
import Skills from "./pages/skills";

const App = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      <TopBar />
      <Career />
      <Skills />
    </div>
  );
};

export default App;
