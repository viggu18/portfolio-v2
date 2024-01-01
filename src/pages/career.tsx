import React, { Fragment } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Title from "@/components/ui/title";

const career = [
  {
    logo: "https://media.licdn.com/dms/image/D560BAQFefrVKr430oA/company-logo_200_200/0/1688105705057/ziniosedge_logo?e=1711584000&v=beta&t=MznhV2-GjShu_lZ12dvbw-suQFPrFGENYWPpVsD6wZE",
    name: "ZiniosEdge Software Limited",
    designation: "Associate Software Developer",
    description:
      "Worked as Associate Software Engineer with a daily goal of building pixel perfect UI aimed to make a difference on hundreds of customers bringing their business online. Built many reusable UI components and wrote flaw proof logic for complex tasks.",
  },
  {
    logo: "https://media.licdn.com/dms/image/D4E0BAQFgHXqXPKIvuA/company-logo_200_200/0/1666414916127/ordrio_logo?e=1711584000&v=beta&t=wyHsaklzLUoPpFkCPCPZwI0WyEhZlEUALgfstt6IG5s",
    name: "Ordrio Technologies Pvt Ltd.",
    designation: "Junior Software Developer",
    description:
      "Worked as Junior Software Engineer with a daily goal of building pixel perfect UI aimed to make a difference on hundreds of customers bringing their business online. Built many reusable UI components and wrote flaw proof logic for complex tasks.",
  },
];
const Career = () => {
  return (
    <div id="career">
      <Title>Career</Title>

      <div className="flex gap-4 flex-col md:flex-row">
        {career.map((item, idx) => (
          <Card key={idx} className="flex-1 max-w-[380px]">
            <CardHeader className="flex gap-4 items-center flex-row">
              <Image src={item.logo} alt="company" width={40} height={60} />
              <div className="">
                <CardTitle className="text-md">{item.designation}</CardTitle>
                <CardDescription className="text-xs">
                  {item.name}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Career;
