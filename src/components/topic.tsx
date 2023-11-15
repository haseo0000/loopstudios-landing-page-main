import React from "react";
import Image from "next/image";

function Topic() {
  return (
    <div className="relative">
      <picture>
        <source media="(min-width:768px)" srcSet="/images/desktop/image-hero.jpg" />
        <img src="/images/mobile/image-hero.jpg" alt="Herobg" width={100} height={100} />
      </picture>
      <div className="absolute top-0 left-0 bg-black w-full h-full opacity-40"></div>

      <div className="absolute top-[40%] w-full md:top-[30%]">
        <div className="border p-[20px] mx-[20px] md:mx-[10%] md:max-w-[500px]">
          <span className="text-4xl md:text-6xl">IMMERSIVE EXPERIENCES THAT DELIVER</span>
        </div>
      </div>
    </div>
  );
}

export default Topic;
