

type BlurCircleConfig = {
  className?: string;           
  gradientClass: string;         
  size?: string;                 
  blur?: string;                 
};

export const galleryCircles: BlurCircleConfig[] = [
  { 
    className: "top-[25%] left-[36%]", 
    gradientClass: "bg-gradient-gold",
    size: "w-[200px] h-[200px] md:w-[400px] md:h-[400px]",
    blur: "blur-[80px] md:blur-[100px]",
  },
  { 
    className: "bottom-[50%] right-[10%]", 
    gradientClass: "bg-gradient-violet-soft",
    size: "w-[180px] h-[180px] md:w-[300px] md:h-[300px]",
    blur: "blur-[70px] md:blur-[90px]",
  },
  { 
    className: "bottom-[15%] right-[10%]", 
    gradientClass: "bg-gradient-violet-soft",
    size: "w-[200px] h-[200px]",
    blur: "blur-[80px]",
  },
  { 
    className: "bottom-[15%] left-[10%]", 
    gradientClass: "bg-gradient-violet-soft",
    size: "w-[220px] h-[220px]",
    blur: "blur-[90px]",
  },
  { 
    className: "top-[9%] right-[60%]", 
    gradientClass: "bg-gradient-violet-soft",
    size: "w-[200px] h-[200px]",
    blur: "blur-[80px]",
  },
  { 
    className: "top-[50%] left-[36%]", 
    gradientClass: "bg-gradient-gold-2",
    size: "w-[220px] h-[220px]",
    blur: "blur-[90px]",
  },
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
    { className: "right-[4%] bottom-[-20%]", gradientClass: "bg-gradient-cyan-soft-hero-2" },
  ];