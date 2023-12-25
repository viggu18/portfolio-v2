import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ListLinks = [
  {
    label: "Nutri Dash",
    url: "https://nutridash.vercel.app/#/home",
  },
  {
    label: "Flash Type",
    url: "https://viggu18.github.io/flashtype/",
  },
  {
    label: "Nutri Dash",
    url: "https://nutridash.vercel.app/#/home",
  },
  {
    label: "Flash Type",
    url: "https://viggu18.github.io/flashtype/",
  },
];

const Projects = () => {
  return (
    <div className="w-full flex justify-center">
      <Carousel
        opts={{ dragFree: false, slidesToScroll: 1 }}
        className="w-full max-w-[80%]"
      >
        <CarouselContent>
          {ListLinks.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2">
              <Card>
                <CardContent className="flex w-full">
                  <iframe
                    className="flex-grow w-[400px] zoom-out-50 h-[50vh]"
                    src={item.url}
                    title={item.label}
                    width={50}
                    height={50}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Projects;
