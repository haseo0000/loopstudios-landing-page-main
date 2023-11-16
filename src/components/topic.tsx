import React from "react";

function Topic() {
  return (
    <div className="relative">
      <picture>
        <source media="(min-width:768px)" srcSet="/images/desktop/image-hero.jpg" />
        <img src="/images/mobile/image-hero.jpg" alt="Herobg" width={100} height={100} />
      </picture>
      <div className="absolute top-0 left-0 bg-black w-full h-full opacity-40"></div>
      <div className="absolute top-[30%] mx-[20px] xl:mx-[10%] xl:top-[20%]">
        <div className="border p-[20px] xl:max-w-[500px]">
          <span className="text-4xl xl:text-6xl">IMMERSIVE EXPERIENCES THAT DELIVER</span>
        </div>
      </div>
    </div>
  );
}

export default Topic;
