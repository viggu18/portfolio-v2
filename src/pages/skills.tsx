import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const skillSet = [
  {
    section: "Frameworks & Libraries",
    skills: [
      "ReactJs",
      "React Native",
      "AngularJs",
      "NextJs",
      "NodeJs",
      "ExpressJs",
    ],
  },
  {
    section: "Database",
    skills: ["Postgres", "MongoDB", "Firebase", "MSSql"],
  },
  {
    section: "Languages",
    skills: ["Typescript", "Javascript", "Python"],
  },
  {
    section: "Miscellaneous",
    skills: [
      "Redux (Rtk, Thunk, Saga)",
      "Zustand",
      "Tailwind CSS",
      "Bootstrap",
      "Fireblocks",
      "Kraken API",
    ],
  },
];

const Skills = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" id="skills">
      {skillSet.map((item, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle className="text-lg">{item.section}</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="flex gap-2 flex-wrap">
              {item.skills.map((skl, skIdx) => (
                <Card
                  key={skIdx}
                  className="cursor-pointer py-1 px-2 select-none"
                >
                  <p className="text-sm">{skl}</p>
                </Card>
              ))}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Skills;