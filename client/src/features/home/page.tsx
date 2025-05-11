"use client";
import React from "react";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import CardPremium from "./components/CardPremium/CardPremium";
import { Footer } from "@/components/Footer/Footer";
import { TechShowcaseSection } from "./components/TechSection/TechSection";
import OpenSourceSection from "./components/OpenSourceSection/OpenSourceSection";

const Landing = () => {


  return (
    <>
      <Hero />
      <OpenSourceSection />
      <TechShowcaseSection/>
      <CardPremium />
      <Footer />
    </>
  );
};

export default Landing
