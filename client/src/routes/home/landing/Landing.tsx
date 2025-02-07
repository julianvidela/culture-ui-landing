"use client";
import React from "react";
import Hero from "../components/Hero/Hero";
import Gallery from "../components/Gallery/Gallery";
import CardPremium from "../components/CardPremium/CardPremium";
import { Footer } from "@/components/Footer/Footer";

const Landing = () => {

  return (
    <>
      <Hero />
      <Gallery />
      <CardPremium />
      <Footer />
    </>
  );
};

export default Landing
