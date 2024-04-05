import React from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

type HeroProps = {
  imgData: StaticImageData;
  title: string;
  imgAlt: string;
};

function Hero(props: HeroProps) {
  return (
    <div>
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          fill
          alt={props.imgAlt}
          style={{ objectFit: "cover" }}
        />
        {/* https://tailwindcss.com/docs/gradient-color-stops */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
}

export default Hero;
