import React from "react";
import { motion } from "framer-motion";

const LogoAnimationAGORAVAI: React.FC = () => {
 const containerVariants = {
    initial: {
      scale: 0.5,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 2,
      },
    },
 };

 const pathVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
 };

 return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 500 500"
          initial="initial"
          animate="animate"
          variants={containerVariants}
        >
          {/* Parte Maior */}
          <motion.path
            d="M363.572 218.14H436.288V436.284H0V0H218.144V72.7122H72.715V363.572H363.572V218.14Z"
            fill="#1F5AFF"
            initial="initial"
            animate="animate"
            variants={pathVariants}
          />
        </motion.svg>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 500 500"
          initial="initial"
          animate="animate"
          variants={containerVariants}
        >
          {/* Parte Menor */}
          <motion.path
            d="M0 0V72.7156H218.144V290.856H290.856V0H0Z"
            fill="#1F5AFF"
            initial="initial"
            animate="animate"
            variants={pathVariants}
          />
        </motion.svg>
      </div>
    </div>
 );
};

export default LogoAnimationAGORAVAI;