import Image from "next/image";
import React from "react";

const BottomList = ["About", "Careers", "Events", "Products", "Support"];
const SocialIconList = [
  "/images/icon-facebook.svg",
  "/images/icon-twitter.svg",
  "/images/icon-pinterest.svg",
  "/images/icon-instagram.svg",
];

function Bottom() {
  return (
    <div className="p-10 grid justify-items-center gap-[20px] md:grid-cols-2 md:items-center md:px-[20%]">
      <div className="md:row-start-1 md:justify-self-start">
        <span className="text-4xl font-bold">loopstudios</span>
      </div>
      <div className="flex flex-col gap-[15px] md:flex-row md:justify-self-start">
        {BottomList &&
          BottomList.map((item) => (
            <span key={item} className="cursor-pointer">
              {item}
            </span>
          ))}
      </div>
      <div className="flex gap-[20px] md:row-start-1 md:col-start-2 md:justify-self-end">
        {SocialIconList.map((item) => (
          <Image key={item} src={item} alt={item} width={30} height={30} />
        ))}
      </div>
      <div className="md:justify-self-end">
        <span className="text-gray-500 mt-5">
          @2021 Loopstudios. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Bottom;
