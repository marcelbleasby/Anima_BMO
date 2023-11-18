import React from "react";
import { motion } from "framer-motion";

const LogoAnimation: React.FC = () => {
    return (
        
  <div>
      <div style={{ display: "flex" }}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="500"
          initial={{ opacity: 1, x: 0 }} // onde a animação da parte começa
          animate={{ opacity: 1, x: 0 }}// caminho do final da animação
        >
          {/* Parte Maior */}
          <motion.path
            d="M363.572 218.14H436.288V436.284H0V0H218.144V72.7122H72.715V363.572H363.572V218.14Z" //path do svg
            fill="#1F5AFF" // Cor da parte 1 da logo
            initial={{ opacity: 1}}
            animate={{ opacity: 1 }}
           // transition={{ duration: 1 }}
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="auto"
          height="auto"
          initial={{ opacity: 1, x: -282, y:-72}}
          //animate={{ opacity: 1, x: 0, y: 0, }}
          
        >
          {/* Parte Menor */}
          <motion.path
            d="M0 0V72.7156H218.144V290.856H290.856V0H0Z" //path do svg
            fill="#1F5AFF" // Cor da parte 2 da logo
            initial={{ opacity: 1, x:-72, y:72 }}
            animate={{ opacity: 1, x:0, y:0}}
            transition={{ duration: 2 }}
          />
        </motion.svg>
      </div>
      </div>
    );
  };
  
  export default LogoAnimation;
