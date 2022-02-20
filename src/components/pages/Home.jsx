import React from "react";
import img from "../assets/me.svg";
import { AnimatePresence, motion } from "framer-motion";
import TypeAnimation from "react-type-animation";
const Home = () => {
  return (
    <div className="w-full">
      <div
        className="grid md:grid-cols-2  sm:grid-cols-1 mx-24 mt-16 md:mt-20"
        id="skills"
      >
        <div id="me" className="font-poppins md:pt-24 lg:pt-28 pt-16">
          <article className="lg:text-2xl text-xl md:text-left text-center tracking-widest lg:mb-4  md:mt-2  lg:mt-6">
            <TypeAnimation
              cursor={true}
              sequence={[
                "Freelancer & MERN Stack Dev",
                2000,
                "Network Engineer & Designer.",
              ]}
              wrapper="h2"
              repeat={Infinity}
            />
          </article>

          <h1 className="xl:text-4xl  md:text-2xl text-xl mb-4 mt-4 md:text-left text-center lg:mb-6 md:mb-2 font-semibold tracking-widest">
            Hi, I'am <span>Abdi Zamed</span> <br />
            Welcome to My Site.
          </h1>
          <div className="md:text-left text-center mb-4 md:mx-1">
            <button className="bg-gray-800 text-white font-montserrat rounded font-bold px-2 py-2 md:text-md lg:px-6 lg:text-2xl lg:py-4  hover:bg-white hover:text-black border-2 hover:-translate-y-2 hover:shadow-md border-gray-800 transition">
              Hire Me
            </button>
          </div>
        </div>
        <div className="md:mt-24  lg:mt-24 xl:mt-28">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, -60, 0] }}
              exit={{ opacity: 0 }}
            >
              <img src={img} alt="Portfolio Pic" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Home;
