import React, { ComponentProps, HTMLProps } from "react";

const SwiperSection = (props: { children: React.ReactElement }) => {
  return (
    <section
      style={{
        background: "transparent",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </section>
  );
};

export default SwiperSection;
