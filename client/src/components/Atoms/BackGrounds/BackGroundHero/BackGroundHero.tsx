import React from 'react';
import "./backgroundhero.css"; 

const BackgroundHero: React.FC = () => {
  return (
    <div className="background-container">  
      <div className="blur-bg">
        <div className="blur-circle circle-1"></div>
        <div className="blur-circle circle-2"></div>
        <div className="blur-circle circle-3"></div>
        <div className="blur-circle circle-4"></div>
        <div className="blur-circle circle-5"></div>

      </div>
    </div>
  );
};

export default BackgroundHero;
