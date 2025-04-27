import FAQAccordion from "@/components/cultureui/Accordion/FaqAccordion";
import React from "react";
import { faqs } from "@/components/cultureui/Accordion/resources/FaqData";
import { Text } from "@/components/Atoms/Text/Text";

const Docs = () => {
  return (
    <section className="w-full h-auto my-16 border-l flex flex-col items-start  gap-5 border-[var(--border-primary)] px-8">
      <div className="max-w-[700px]">

      <div className="flex flex-col gap-5 mt-4">
        <Text fontWeight="700" color="secondary" size="large" as="h2" >
          
          Introduction
        </Text>
        <Text color="primary" fontWeight="600" size="small" as="p">
          CultureUI is a modern, well-designed component library built to
          deliver accessible, customizable, and production-ready solutions.
        </Text>
        <Text color="primary" fontWeight="600" size="small" as="p">
          Our components are developed and distributed through npm, allowing for
          easy and scalable integration into your projects.
        </Text>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <Text fontWeight="700" color="secondary" size="medium" as="h2" className="relative">
          <span className="absolute top-0 -left-8 z-20 block h-full w-[6px] rounded-tr-full rounded-br-full bg-zinc-400"></span>
          How does it work?
        </Text>
        <Text fontWeight="600" color="primary" size="small" as="p">
          is not just a collection of components, but a tool that helps you
          build consistent and high-performance interfaces. You can install the
          library and take advantage of its flexibility and ongoing maintenance.
        </Text>
        <Text fontWeight="600" color="primary" size="small" as="p">
          Our priority is to provide you with reusable components that fit your
          needs, without sacrificing quality or accessibility.
        </Text>
      </div>
      <div className="flex flex-col gap-5 mt-8">
        <Text fontWeight="700" color="secondary" size="medium" as="h2" className="relative">
          <span className="absolute top-0 -left-8 z-20 block h-full w-[6px] rounded-tr-full rounded-br-full bg-zinc-400"></span>
          FAQ
        </Text>
      </div>
      <div className="mt-5">
        <FAQAccordion data={faqs} />
      </div>
      </div>
    </section>
  );
};
export default Docs;
