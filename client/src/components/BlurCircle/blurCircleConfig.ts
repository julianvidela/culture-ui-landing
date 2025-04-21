

type BlurCircleConfig = {
    className?: string; 
    gradientClass: string; 
  };
  
  export const galleryCircles: BlurCircleConfig[] = [
    { className: "top-[25%] left-[36%]", gradientClass: "bg-gradient-gold" },
    { className: "bottom-[50%] right-[10%]", gradientClass: "bg-gradient-cyan-soft" },
    { className: "bottom-[15%] right-[10%]", gradientClass: "bg-gradient-blue-dark" },
    { className: "bottom-[15%] left-[10%]", gradientClass: "bg-gradient-blue-deep" },
    { className: "top-[9%] right-[60%]", gradientClass: "bg-gradient-cyan-soft-2" },
    { className: "top-[50%] left-[36%]", gradientClass: "bg-gradient-gold-2" },
  ];
  
  export const heroCircles: BlurCircleConfig[] = [
    { className: "top-[20%] left-[35%]", gradientClass: "bg-gradient-gold-solid" },
    { className: "top-[10%] left-[1%]", gradientClass: "bg-gradient-cyan-soft-hero" },
    { className: "bottom-[2%] right-[6%]", gradientClass: "bg-gradient-blue-solid" },
    { className: "bottom-[2%] left-[6%]", gradientClass: "bg-gradient-blue-solid" },
    { className: "top-[9%] right-[1%]", gradientClass: "bg-gradient-cyan-alt" },
  ];
  
  export const cardCircles: BlurCircleConfig[] = [
    { className: "left-[2%] bottom-[-70%]", gradientClass: "bg-gradient-blue-deep-light" },
    { className: "left-[80%] bottom-[20%]", gradientClass: "bg-gradient-cyan-soft-hero-2" },
  ];