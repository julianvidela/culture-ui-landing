import React from "react";
import { AvatarStack } from "@/components/cultureui/AvatarStack/AvatarStack";
import FAQAccordion from "@/components/cultureui/Accordion/FaqAccordion";
import { AnimatedTooltip } from "@/components/cultureui/TooltipAnimated/TooltipAnimated";
import Carrousel from "@/components/cultureui/Carrusel/Carrusel";
import { FloatingNavBar } from "@/components/cultureui/FloatingNavBar/FloatingNavBar";
import { AtSign, Home, Search, TrendingUp, User } from "lucide-react";
import { Modal } from "@/components/cultureui/modal/Modal";
import { MotionText } from "@/components/cultureui/MotionText/MotionText";
import { SocialSelector } from "@/components/cultureui/SocialSelector/SocialSelector";
import LinkedinIcon from "@/common/assets/icons/Linkedin";
import InstagramIcon from "@/common/assets/icons/Instagram";
import GithubIcon from "@/common/assets/icons/GithubIcon";
import { StatsWidget } from "@/components/cultureui/StatsWidget/StatsWidget";


const componentMap: Record<string, React.ComponentType<any>> = {
  accordion: FAQAccordion,
  animatedtooltip: AnimatedTooltip,
  avatarstack: AvatarStack,
  carousel: Carrousel,
  floatingnavbar: FloatingNavBar,
  modal: Modal,
  motiontext:MotionText,
  socialselector:SocialSelector,
  statswidget: StatsWidget,
  
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

const previewProps: Record<string, any> = {
  accordion: {
    className: "w-auto p-1",
    data: [
      {
        question: "Can I customize the styles?",
        answer:
          "Absolutely! All components are fully customizable via props and CSS.",
      },
      {
        question: "How do I install the library?",
        answer:
          "Just run `npm install cultureui-library` and import the components you need.",
      },
    ],
  },
  animatedtooltip: {
    content: "Animated Tooltip 🚀",
    position: "top",
    children: (
      <button className="px-8 py-4 text-sm font-semibold bg-black text-white rounded-lg">
        Hover over me
      </button>
    ),
  },
  avatarstack: {
    maxVisible: 2,
    people: [
      {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Smith",
        role: "Developer",
      },
      {
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Mary Johnson",
        role: "Designer",
      },
      {
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        name: "Carlos Garcia",
        role: "Project Manager",
      },
    ],
  },
  carousel: {
    height: "300px",
    width: "100%",
    titleColor: "#ffffff",
    descColor: "#fafafa",
    titleSize: "24px",
    titleWeight: "bold",
    descWeight: "medium",
    descSize: "14px",
    buttonBgColor: "#333333",
    chevronColor: "#ffffff",
    data: [
      {
        image:
          "https://img.freepik.com/foto-gratis/mujeres-riendo-felices-tomando-cafe_23-2148850668.jpg?semt=ais_hybrid&w=740",
        title: "Custom Slide 1",
        description: "How do I use the Carousel component?",
      },
      {
        image:
          "https://img.freepik.com/foto-gratis/mujeres-tiro-medio-hablando-terapia_23-2148913068.jpg",
        title: "Custom Slide 2",
        description: "Can I add custom navigation arrows?",
      },
    ],
  },
  floatingnavbar: {
    bgColor: "#24242430",
    indicatorColor: "#242424630",
    iconColor: "#808080",
    activeIconColor: "#ffffff",
    items: [
      {
        id: "home",
        icon: <Home size={24} strokeWidth={2} />,
      },
      {
        id: "search",
        icon: <Search size={24} strokeWidth={2} />,
      },
      {
        id: "profile",
        icon: <User size={24} strokeWidth={2} />,
      },
    ],
  },
  modal: {
    title: "Únete a la comunidad",
    description: "Sé parte de nuestro newsletter exclusivo.",
    backgroundColor: "#ffffff",
    textColor: "#333333",
    titleSize: "24px",
    descriptionSize: "16px",
    fontWeight: "700",
    buttonText: "Suscribirse",
    border: "1px solid #e5e7eb",
    successMessageBg: "#000000",
    successMessageText: "#ffffff",
    inputPlaceholder: "Correo electrónico",
    trigger: (
      <button className="px-8 py-4 text-sm font-semibold bg-black text-white rounded-lg">
        Abrir Modal
      </button>
    ),
    customSubmitButton: (
      <button
        type="submit"
        className="w-full py-4 text-sm font-semibold bg-black text-white rounded-lg"
      >
        Suscribirse
      </button>
    ),
  },
  motiontext: {
    className: "text-2xl font-bold text-white",
    text: "Welcome to our page!",
    delayStep: 0.1,
    direction: "up",
    loop: true,
    interval: 2000,
  },
  socialselector: {
    onChange: ((id: any) => console.log(id)),
    variant: "colored",
    items: [
      {
        id: "Linkedin",
        icon: <LinkedinIcon size={20} color="#fafafa" strokeWidth={2} />,
        color: "bg-blue-500",
        description: "See what’s happening in the world right now.",
        href: "https://www.linkedin.com/in/julian-videla",
        username: "@JulianVidela",
      },
      {
        id: "Portfolio",
        icon: <AtSign size={20} strokeWidth={2} />,
        color: "bg-violet-500",
        description: "Connect with friends and the world around.",
        href: "https://julianvidela.vercel.app/",
        username: "@jv",
      },
      {
        id: "instagram",
        icon: <InstagramIcon size={20} strokeWidth={2} />,
        color: "bg-pink-500",
        description: "Capture and share the world’s moments.",
        href: "https://www.instagram.com/julianvidela_/?theme=dark",
        username: "@julianvidela_",
      },
      {
        id: "github",
        icon: <GithubIcon size={20} strokeWidth={2} />,
        color: "bg-black",
        description: "Explore open source projects and code.",
        href: "https://github.com/julianvidela",
        username: "@julianvidela",
      },
    ],
  },
  statswidget: {
    title: "Total Users",
    value: "12.4K",
    change: "+8.2%",
    status: "positive",
    icon: <TrendingUp size={20} />,
    description: "since last month",
    className: "transparent",
  },
};

interface ComponentPreviewProps {
  id: string;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({ id }) => {
  const normalizedId = id.toLowerCase();
  const PreviewComponent = componentMap[normalizedId];
  const props = previewProps[normalizedId] || {};

  if (!PreviewComponent) {
    return (
      <span className="text-zinc-500">
        No preview available for this component.
      </span>
    );
  }

  return (
    <div className="flex flex-col h-auto bg-[#0A0A0A] rounded-lg px-14 py-[4.5rem] justify-center items-center overflow-hidden">
      <div className="w-auto flex justify-center items-center">
        <PreviewComponent {...props} />
      </div>
    </div>
  );
};
export default ComponentPreview;