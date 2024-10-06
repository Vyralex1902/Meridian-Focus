import React from 'react';
import "./App.css";

interface ButtonCardProps {
  title: string;
  icon: string;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ title, icon }) => {
  return (
    <div id='buttonCardContainer' className="flex flex-col justify-center rounded-md px-[10px] pt-[10px] w-[100px] h-[120px]
    m-[10px]" style={{ border: '1px solid gray', transition: 'all 0.2s linear' }}>
      <img src={icon} alt={title} />
      <div className='my-[5px]'></div>
      <h3>{title}</h3>
    </div>
  );
};

export default ButtonCard;
