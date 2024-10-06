import React from 'react';
import { motion } from "framer-motion"
import "./App.css";

interface ToolButtonProps {
  text: string;
  icon: string;
}

const ToolButton: React.FC<ToolButtonProps> = ({ text, icon }) => {
  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}
      className='w-[100px] h-[35px] m-2' id='toolBtn'>
      <img className='w-[22px] relative left-0 mr-2' src={icon}></img>
      <p>{text}</p>
    </motion.button>
  );
};

export default ToolButton;
