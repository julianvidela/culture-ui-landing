"use client";

import { StickyCardsStack } from "../../../../components/StickyCardsComponent/StickyCardsComponent";
import ScrollReveal from "../../../../components/Atoms/ScrollFloat/ScrollFloat";
import { Text } from "@/components/Atoms/Text/Text";

const philosophyData = [
  {
    title: "🌱  Origin",
    description:
      "This idea started as part of a simulated project. After the simulation ended, it lingered as potential. I knew finishing it could help me — and maybe others.",
    url: "",
    color: "#CF6700",
  },
  {
    title: "🛠  Purpose",
    description:
      "CultureUI aims to simplify and speed up frontend development with reusable components, good DX, and clarity in code structure.",

    url: "",
    color: "#6E0096",
  },
  {
    title: "🚀  Open Source",
    description:
      "It's made public to contribute, learn, and share. Because knowledge grows when it’s shared.",

    url: "",
    color: "#0ea5e9",
  },
];

export const PhilosophySection = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row w-full gap-7 m-auto h-auto my-10 md:my-52 px-2">
      <div className="flex-grow  w-full lg:w-[50%]">
        <StickyCardsStack
          items={philosophyData}
          minHeight="300px"
          cardHeight="320px"
        />
      </div>
      <div className=" w-full  lg:w-[45%] flex flex-col gap-5 justify-center items-center lg:items-end md:sticky lg:top-[25%] h-fit ">
        <div className="w-fit px-5 py-2 bg-black rounded-full border border-[var(--border-primary)]">
          <Text as="p" color="secondary" fontWeight="700" size="normal">
            Philosophy ♟ 
          </Text>
        </div>
        <div className="flex justify-end gap-5 w-full ">
          <ScrollReveal
          text="The Philosophy Behind the Project, Built With Intention"
            justifyContentH2={{ base: "center", lg: "end" }}
  justifyContainer={{ base: "center", lg: "end" }}
  align={{ base: "center", lg: "left" }}
            
            className="w-[85%] md:w-[75%]  text-[35px] md:text-[40px] font-semibold text-zinc-800 dark:text-white"
          />
        </div>
      </div>
    </section>
  );
};
