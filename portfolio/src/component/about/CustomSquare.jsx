import React from "react";
import { motion } from "framer-motion";
import Walls from "../animation/openWalls/Walls";

function CustomSquare({ content, squareStyle, contentStyle }) {
  return (
    <motion.div className={squareStyle}>
      <motion.div className={contentStyle}>
        {content}
      </motion.div>
      <Walls />
    </motion.div>
  );
}

export default CustomSquare;
