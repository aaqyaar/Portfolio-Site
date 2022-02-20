import React from "react";
import Pulse from "react-reveal/Pulse";

export default function About() {
  return (
    <section id="About" className="md:mt-48 max-w-full mt-28">
      <div>
        <div
          id="About"
          className="mb-16 font-montserrat flex items-center justify-center"
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
                Who am I
              </h1>
              <hr />
              <p className="text-lg w-full text-center md:text-left tracking-wide font-montserrat md:py-0 py-4 px-4 md:px-0">
                I am Abdi Zamed, A Full Stack Web Dev based in Mogadishu. My
                Skill I learn't in Tiigsi Technology which is the best platform
                to learn in MERN Stack Developer in east africa so join it and
                get a skill.
              </p>
              <article className="mt-2">
                <div className="font-montserrat text-center  md:text-left mb-4 md:w-96 ">
                  <h1 className="font-poppins border-b-2 text-xl inline cursor-pointer border-gray-700 font-semibold text-gray-800">
                    Main Skills
                  </h1>

                  <p className="text-lg leading-8 mt-4 md:mt-0 text-gray-600">
                    <span className="text-gray-800 font-poppins">
                      Front-end Dev
                    </span>
                    - React JS
                    <br />
                    <span className="text-gray-800 font-poppins">
                      Back-end Dev
                    </span>
                    - Node JS & ExpressJS
                    <br />
                    <span className="text-gray-800 font-poppins">Database</span>
                    - SQL Server & MongoDB <br /> & MySQL.
                  </p>
                </div>
              </article>
            </div>
          </Pulse>
        </div>
      </div>
    </section>
  );
}
