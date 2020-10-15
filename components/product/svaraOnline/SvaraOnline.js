import dynamic from "next/dynamic";
import React from "react";
const Slider = dynamic(() => import("./Slider"), { ssr: false });
import Content from "./Content";
const SvaraOnline = () => {
  return (
    <div>
      <Slider />
      <Content />
    </div>
  );
};

export default SvaraOnline;
