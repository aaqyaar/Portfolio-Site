import React from "react";
import Pulse from "react-reveal/Pulse";
import Sides from "./layout/Sides";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
export default function About() {
  return (
    <section id="About" className="relative md:mt-48 max-w-full mt-28">
      <div>
        <div
          id="About"
          className="mb-16 font-poppins flex items-center justify-center"
        >
          <h1 className=" border-b-4 rounded text-4xl font-bold tracking-wider inline-block border-gray-700 text-gray-700">
            About Me
          </h1>
        </div>
        <div className="relative grid md:grid-cols-2 grid-cols-1 justify-items-center md:mx-20 lg:mx-64">
          <div className="mb-8 md:order-first order-last">
            <Pulse>
              <div className="h-96 bg-myPic bg-cover w-80 bg-center shadow-gray-800 shadow-sm rounded-md"></div>
            </Pulse>
          </div>
          <Pulse>
            <div id="content" className="font-poppins">
              <h1 className="text-5xl hidden md:block tracking-wider md:mx-0 mx-4 font-semibold text-gray-800">
                Who am i ?
              </h1>
              <hr />
              <p className="text-lg w-full text-center md:text-left tracking-wide font-poppins md:py-0 py-4 px-4 md:px-0">
                I am Abdi Zamed, A Full Stack Web Dev based in Mogadishu. My
                Skill I learn't in Tiigsi Technology which is the best platform
                to learn in MERN Stack Developer in east africa so join it and
                get a skill.
              </p>
              <article className="mt-2">
                <div className="font-montserrat text-center  md:text-left mb-4 md:w-96">
                  <h1 className="font-poppins border-b-2 text-xl inline  border-gray-700 font-semibold text-gray-800">
                    Main Skills
                  </h1>

                  <div className="text-lg  mt-4 md:mt-0 text-gray-600">
                    <div className="flex items-center justify-center md:justify-start mt-4">
                      <FaReact className="w-7 h-7 text-slate-800" />
                      <span className="text-gray-800 mx-2 font-poppins">
                        React JS for Client Side
                      </span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start mt-3">
                      <FaNodeJs className="w-7 h-7 text-slate-800" />
                      <span className="text-gray-800 font-poppins mx-2">
                        Node JS for Server Side
                      </span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start mt-3">
                      <FaDatabase className="w-7 h-7 text-slate-800" />
                      <span className="text-gray-800 mx-2 font-poppins">
                        SQL Server & MongoDB & MySQL.
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </Pulse>
        </div>
      </div>
      <Sides />
    </section>
  );
}
