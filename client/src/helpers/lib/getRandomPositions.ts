type Position = {
    position: string;
    positionLg: string;
  };
  
  // export const presetPositions = [
  //   {
  //     position: "absolute top-[14%] left-[8%]",
  //     positionLg: "absolute top-[15%] left-[16%]",
  //   },
  //   {
  //     position: "absolute top-[23%] right-[3%]",
  //     positionLg: "absolute top-[20%] right-[12%]",
  //   },
  //   {
  //     position: "absolute top-[38%] left-[1%]",
  //     positionLg: "absolute top-[45%] left-[5%]",
  //   },
  //   {
  //     position: "absolute top-[50%] right-[10%]",
  //     positionLg: "absolute top-[55%] right-[8%]",
  //   },
  //   {
  //     position: "absolute bottom-[30%] left-[20%]",
  //     positionLg: "absolute bottom-[25%] left-[12%]",
  //   },
  //   {
  //     position: "absolute bottom-[10%] right-[16%]",
  //     positionLg: "absolute bottom-[20%] right-[6%]",
  //   },
  //   {
  //     position: "absolute bottom-[8%] left-[35%]",
  //     positionLg: "absolute bottom-[6%] left-[30%]",
  //   },
  //   {
  //     position: "absolute bottom-[8%] right-[30%]",
  //     positionLg: "absolute bottom-[6%] right-[25%]",
  //   },
  // ];


  export const presetPositions = [
    {
      position: "absolute top-[5%] left-[5%]",
      positionLg: "absolute top-[8%] left-[10%]",
    },
    {
      position: "absolute top-[20%] right-[5%]",
      positionLg: "absolute top-[25%] right-[10%]",
    },
    {
      position: "absolute top-[35%] left-[10%]",
      positionLg: "absolute top-[40%] left-[15%]",
    },
    {
      position: "absolute top-[55%] right-[10%]",
      positionLg: "absolute top-[60%] right-[10%]",
    },
    {
      position: "absolute bottom-[20%] left-[10%]",
      positionLg: "absolute bottom-[15%] left-[5%]",
    },
    {
      position: "absolute bottom-[35%] right-[15%]",
      positionLg: "absolute bottom-[30%] right-[10%]",
    },
    {
      position: "absolute bottom-[10%] left-[30%]",
      positionLg: "absolute bottom-[8%] left-[25%]",
    },
    {
      position: "absolute bottom-[5%] right-[25%]",
      positionLg: "absolute bottom-[5%] right-[20%]",
    },
  ];
  
  export const getRandomPositions = (count: number): Position[] => {
    const shuffled = presetPositions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  