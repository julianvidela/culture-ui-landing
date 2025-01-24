import React from 'react';
import "./backgroundhero.css"; 

const BackgroundHero: React.FC = () => {
  return (
    <div className="background-container">  
      <div className="blur-bg">
        <div className="blur-circle circle-1-h"></div>
        <div className="blur-circle circle-2-h"></div>
        <div className="blur-circle circle-3-h"></div>
        <div className="blur-circle circle-4-h"></div>
        <div className="blur-circle circle-5-h"></div>

      </div>
    </div>
  );
};

export default BackgroundHero;
