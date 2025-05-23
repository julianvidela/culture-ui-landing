"use client";

import { Footer } from "@/components/Footer/Footer";
import { HeroShowCase } from "./components/HeroShowCase";
import { ComponentsGallery } from "./components/ComponentsGallery";
import { Modal } from "@/components/cultureui/Modal/Modal";
import { Button } from "@/components/Atoms/Button/Button";
import { SocialSelector } from "@/components/cultureui/SocialSelector/SocialSelector";

import GithubIcon from "@/common/assets/icons/GithubIcon";
import LinkedinIcon from "@/common/assets/icons/Linkedin";
import { color } from "framer-motion";
import { AtSign, Home, Search, User } from "lucide-react";
import InstagramIcon from "@/common/assets/icons/Instagram";
import { AvatarStack } from "@/components/cultureui/AvatarStack/AvatarStack";
import { FloatingNavBar } from "@/components/cultureui/FloatingNavBar/FloatingNavBar";
import { TestimonialSlider } from "@/components/cultureui/TestimonialSlider/TestimonialSlider";


const testimonials = [
  {
    avatar: "/users/julian.png",
    name: "Julian Dev",
    role: "Frontend Developer",
    quote: "This library saved my life. Amazing work from the team.",
  },
  {
    avatar: "/users/laura.png",
    name: "Laura UX",
    role: "Product Designer",
    quote: "Simple, scalable and beautiful.",
  },
];


const ComponentShowCase = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-8">
      <HeroShowCase />

      <ComponentsGallery />

      <Footer /> 
      
    </div>
  );
};

export default ComponentShowCase;
