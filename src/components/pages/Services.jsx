import React from "react";
import Zoom from "react-reveal/Zoom";
import Mobile from "../assets/mobile.svg";
import Web from "../assets/web.svg";
import branding from "../assets/branding.svg";
function Services() {
  const serviceSection = [
    {
      id: 101,
      icon: <img src={Mobile} className="w-48 text-gray-700 h-24 mt-4" />,
      serviceTitle: "Mobile Development",
      description:
        " is the act or process by which a mobile app is developed for android & ios devices.",
    },
    {
      id: 102,
      icon: <img src={Web} className="w-48 text-gray-700 h-24 mt-4" />,
      serviceTitle: "Website Development",
      description:
        " is the act or process by which a web dev is developed by web applications & systems.",
    },
    {
      id: 103,
      icon: <img src={branding} className="w-48 text-gray-700 h-24 mt-4" />,
      serviceTitle: "Branding & Video Editing",
      description:
        "is the designing and developing logos , videos & images and products for the industry.",
    },
  ];
  return (
    <section id="Services">
      <div>
        <div className="flex justify-center my-20">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-montserrat tracking-wide">
            My Awesome Services
          </h1>
        </div>
        <article className="grid lg:grid-cols-3 md:grid-cols-2 mx-20 mb-20 gap-6  font-poppins">
          <Zoom bottom>
            {serviceSection.map((service) => (
              <div
                key={service.id}
                className="shadow-lg shadow-slate-100  rounded  flex flex-col items-center justify-center"
              >
                {service.icon}
                <h1 className="text-lg md:text-xl lg:text-2xl my-4">
                  {service.serviceTitle}
                </h1>
                <p className="text-center text-sm md:text-md lg:text-lg mb-8 w-4/5 text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </Zoom>
        </article>
      </div>
    </section>
  );
}

export default Services;
