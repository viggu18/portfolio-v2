"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";

const PROJECTS = [
  {
    name: "Discord Clone",
    skills: [
      "NextJs",
      "Javascript",
      "Clerk Auth",
      "Tailwind",
      "shadcn/ui",
      "Prisma ORM",
      "Socket.io",
    ],
    description: "A full discord clone with video calling feature",
    url: "",
    git: "https://github.com/viggu18/discord-clone",
  },
  {
    name: "FlashType",
    skills: ["ReactJs", "Javascript", "HTML", "CSS"],
    description:
      "A typing speed tester application built using ReactJs. Contains custom logic to calculate the typing speed of the user and shows the typing speed in real time",
    url: "https://viggu18.github.io/flashtype",
    git: "https://github.com/viggu18/flashtype",
  },
  {
    name: "Name It",
    skills: ["ReactJs", "Javascript", "HTML", "CSS"],
    description:
      "Name Generator application which provides naming suggestions based on user input",
    url: "https://viggu18.github.io/name-it",
    git: "https://github.com/viggu18/name-it",
  },
  {
    name: "Uber Eats Clone",
    skills: ["React Native", "Expo", "Javascript", "Tailwind"],
    description:
      "Uber Eats App Clone built using Expo. Implemented cart functionality using Redux",
    url: "https://snack.expo.dev/@viggu18/23e4a6",
    git: "https://github.com/viggu18/uber-eats-clone-rn",
  },
  {
    name: "Deliveroo Clone",
    skills: ["React Native", "Expo", "Javascript", "Tailwind"],
    description: "Deliveroo App Clone built using Expo",
    url: "https://snack.expo.dev/@viggu18/5c1885",
    git: "https://github.com/viggu18/Deliveroo-clone-rn",
  },
  {
    name: "GPT-3 Intro",
    skills: ["ReactJs", "Javascript", "HTML", "CSS"],
    description:
      "Static website represeting the introduction of GPT-3. Focused on responsiveness and supporting all display sizes",
    url: "https://gpt3-intro.vercel.app/",
    git: "https://github.com/viggu18/GPT3-Intro",
  },
  {
    name: "Quiz App",
    skills: ["ReactJs", "Javascript", "HTML", "CSS"],
    description:
      "Small quiz app consiting of 4 questions. Wrote custom logic to calculate the score.",
    url: "https://viggu18.github.io/quiz-app",
    git: "https://github.com/viggu18/quiz-app",
  },
];

const Projects = () => {
  return (
    <div className="w-full flex flex-col justify-center" id="project">
      <Title>Projects</Title>
      <Carousel
        opts={{ dragFree: true, slidesToScroll: 1 }}
        className="w-full max-w-[100%]"
      >
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
        <CarouselContent>
          {PROJECTS.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 md:basis-1/2 lg:basis-1/4 flex max-w-[300px]"
            >
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-md">{item.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  {item.skills?.map((skl) => (
                    <Card key={skl} className="p-1 text-xs">
                      {skl}
                    </Card>
                  ))}
                </CardContent>
                <CardContent className="flex gap-3">
                  <a href={item.git} target="_blank" rel="noreferrer">
                    <Button variant="default">Repo</Button>
                  </a>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <Button variant="default">Preview</Button>
                  </a>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Projects;
