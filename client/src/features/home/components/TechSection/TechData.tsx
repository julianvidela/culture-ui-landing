import NextjsLogo from "@/common/assets/icons/LogoNext";
import LogoTypescript from "@/common/assets/icons/LogoTypescript";
import LogoTailwind from "@/common/assets/icons/LogoTailwind";
import LogoMotion from "@/common/assets/icons/LogoMotion";


export const techStack = [
  {
    title: "The React Framework for the Web",
    description:
      "Used by some of the world’s largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
    iconComponent: <NextjsLogo color="#ffffff" width={200} height={30} />,
    url: "",
    color: "#CF6700",
  },
  {
    title: "Is a superset of javascript",
    description: "TypeScript brings type safety and modern tooling to JavaScript, making development more robust and enjoyable.",
    iconComponent: <LogoTypescript color="#3178c6" size={26} />,
    url: "",
    color: "#3178c6",
  },
  {
    title: "The Modern CSS Framework",
    description: "Tailwind is unapologetically modern, and takes advantage of all the latest and greatest CSS features to make the developer experience as enjoyable as possible.",
    iconComponent: <LogoTailwind textColor="#ffffff" width={200} height={45} />,
    url: "",
    color: "#0ea5e9",
  },
  {
    title: "Animations for React",
    description: "Framer Motion provides a simple yet powerful way to create animations and interactions for React applications, enhancing user experience with smooth transitions.",
    iconComponent: <LogoMotion color="#fff42b" width={45} height={45} />,
    url: "",
    color: "#fff42b",
  },
];
