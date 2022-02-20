import React from "react";

function images(props) {
  return (
    <section className="w-full flex justify-center">
      <img src={props.img} className="h-72 rounded w-80" />
    </section>
  );
}

export default images;
