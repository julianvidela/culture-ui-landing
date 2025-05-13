"use client";
import React from "react";
import Hero from "./components/Hero/Hero";

import { Footer } from "@/components/Footer/Footer";
import { TechShowcaseSection } from "./components/TechSection/TechSection";
import OpenSourceSection from "./components/OpenSourceSection/OpenSourceSection";
import { PhilosophySection } from "./components/PhilosophySection/PhilosophySection";
import { ContributeSection } from "./components/SupportSection/SupportSection";

const Landing = () => {


  return (
    <>
      <Hero />
      <OpenSourceSection />
      <TechShowcaseSection/>
      <PhilosophySection />
      <ContributeSection />
      
    </>
  );
};

export default Landing
