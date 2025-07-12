"use client";

import { Card, CardBody, CardFooter, Image, Divider, Button } from "@heroui/react";

export default function App() {
  const list = [
    {
      title: "Streaming stocks market and visualization",
      img: "/projects/etlFinance.png",
      detail: "Test"
    },
    {
      title: "Funding website",
      img: "/projects/FoundrFund.png",
      detail: "$3.00",
    },
    {
      title: "Inkball Game",
      img: "/projects/inkball.png",
      detail: "$3.00",
    },
    {
      title: "Machine Translation",
      img: "/projects/mt-nlp.png",
      detail: "$3.00",
    },
    {
      title: "Self-hosted Chat Assistance",
      img: "/projects/ollama.png",
      detail: "$3.00",
    },

  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-8">
      {list.map((item, index) => (
        <Card
          isBlurred
          key={index}
          isPressable
          shadow="sm"
          onPress={() => console.log("item pressed")}
          className="transition-transform duration-300 hover:scale-[1.03] border-none bg-background/60 dark:bg-default-100/50"
        >
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[350px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small flex flex-col items-start gap-2">
            <div className="w-full text-center font-bold">{item.title}</div>
            <Divider className="w-full" />
            <div className="w-full text-left text-default-500">{item.detail}</div>

            {/* Right-aligned button */}
            <div className="w-full flex justify-end">
              <Button>Action</Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
