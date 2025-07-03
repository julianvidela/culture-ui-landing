"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../../../../components/Atoms/ScrollFloat/ScrollFloat";
import { Text } from "@/components/Atoms/Text/Text";
import { philosophyData } from "./PhilosophyData";
import Image from "next/image";
import Img from "@/common/assets/img";
import { easeOut } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const PhilosophySection = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row w-full gap-10 m-auto h-auto my-10 md:my-36 lg:my-[250px] px-5">
      <div className="relative w-full lg:w-1/2  h-[700px] rounded-2xl flex flex-col items-center gap-3 p-6 overflow-hidden">
        <div className="absolute blur-[120px] -bottom-[20%] bg-orange-600 w-40 h-40" />
        <div className="absolute blur-[120px] -top-[20%] bg-blue-600 w-40 h-40" />
        <div className="h-full w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut}}
            viewport={{ once: true }}
            className="absolute -top-[270px] md:-top-32 md:left-[124px] lg:left-auto lg:-top-44 "
          >
            <Image
              src={Img.PhoneTop}
              alt="Phone top"
              width={240}
              height={480}
              className="rounded-xl drop-shadow-xl"  
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -bottom-60 md:-bottom-32 md:right-[124px] lg:right-auto lg:-bottom-32 "
          >
            <Image
              src={Img.PhoneBottom}
              alt="Phone bottom"
              width={240}
              height={480}
              className="rounded-xl drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-evenly lg:justify-between gap-5 h-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeUpVariant}
          className="flex flex-col gap-5 justify-start items-center lg:items-end"
        >
          <div className="w-fit px-5 py-2 bg-black rounded-full border border-[var(--border-primary)]">
            <Text as="p" color="secondary" fontWeight="700" size="normal">
              Philosophy ♟
            </Text>
          </div>

          <div className="flex justify-center gap-5 w-full">
            <ScrollReveal
              text="The Philosophy Behind the Project, Built With Intention"
              justifyContentH2={{ base: "center", lg: "end" }}
              justifyContainer={{ base: "center", lg: "end" }}
              align={{ base: "center", lg: "left" }}
              className="w-full text-[28px] md:text-[40px] lg:text-[38px] font-semibold text-zinc-800 dark:text-white"
            />
          </div>
        </motion.div>

        <div className="flex flex-col items-end justify-end gap-4 w-full">
          {philosophyData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              className="flex flex-col w-full rounded-lg p-4 overflow-hidden relative bg-black"
            >
                <div className="absolute blur-[120px] -bottom-[100%] w-full h-5" style={{
                  backgroundColor: item.bgColor
                }} />
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center justify-start">
                  <Text
                    as="h3"
                    fontWeight="700"
                    className="flex gap-2 items-center text-[20px] md:text-[24px] lg:text-[30px]"
                    style={{ color: item.titleColor }}
                  >
                    {item.icon}
                    {item.title}
                  </Text>
                </div>

                <Text
                  as="p"
                  color="secondary"
                  fontWeight="600"
                  className="text-[16px] md:text-[18px] lg:text-[16px]"
                  style={{ color: item.desColor }}
                >
                  {item.description}
                </Text>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
