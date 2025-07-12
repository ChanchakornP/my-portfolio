"use client";

import { Card, CardBody, CardFooter, Image, Divider, Button } from "@heroui/react";

export default function App() {
  const list = [
    {
      title: "Streaming stocks market and visualization",
      img: "/projects/etlFinance.png",
      detail: "This project automates the process of fetching, transforming, and visualizing stock market data using modern data engineering tools. The pipeline extracts data from the Alpha Vantage API, processes it, and stores it in PostgreSQL, with visualization handled by Grafana.",
      link: "https://github.com/ChanchakornP/etlFinance",
    },
    {
      title: "Funding website",
      img: "/projects/FoundrFund.png",
      detail: "A crowdfunding platform website built to validate a startup idea as part of a university unit. It allows users to explore and invest in curated business opportunities submitted by vetted founders.",
      link: "https://foundr-fund.vercel.app/",
    },
    {
      title: "Inkball Game",
      img: "/projects/inkball.png",
      detail: "A puzzle game built with Java inspired by the classic Inkball. Players draw lines to guide colored balls into matching holes while avoiding mismatches and obstacles.",
      link: "https://github.com/ChanchakornP/myInkball",
    },
    {
      title: "Machine Translation",
      img: "/projects/mt-nlp.png",
      detail: "A transformer based model for language translation (Thai to English). The model is available on huggingface.",
      link: "https://huggingface.co/ChanP/finetuned-th-to-en",
    },
    {
      title: "Self-hosted Chat Assistance",
      img: "/projects/ollama.png",
      detail: "Host a Llama model and design ChatGPT-ish website using Flask.",
      link: "https://github.com/ChanchakornP/Chat",
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
              <a href="https://github.com/ChanchakornP/etlFinance" target="_blank" rel="noopener noreferrer">
                <Button>More Detail</Button>
              </a>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
