// import React, { useRef } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import me from "../assets/logo.png";

const Home = ({ ratio }) => {
  
 

  const animations = {
    h1: {
      initial: {
        x: "100%",
        opacity: 0,
      },
      animate:{
        x: "-100%",
        opacity: 1,
      },
      whileInView: {
        x: 0,
        opacity: 1,
        
      },
      transition:{
        duration:.5,type:"spring",damping:6,when:"beforeChildren"
      }
      
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <div id="home">
        <span></span>
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Ravi Kumar
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A MERN stack Developer", ""],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          < motion.div {...animations.button} >
            <a href="mailto:ravi.jsdeveloper@gmail.com">Send Mail for Hire me</a>
           
          </motion.div>

          

          <aside>
            <article>
              <p>
                +5
                
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>ravi.jsdeveloper@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Ravi" />
      </section>
     
    </div>
  );
};

export default Home;
