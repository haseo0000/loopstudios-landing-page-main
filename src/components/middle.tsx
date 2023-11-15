import Image from "next/image";
import React from "react";
import CreationsData from "../data/creationsData.json";

function Middle() {
  return (
    <div className="bg-white text-black px-7 py-20 md:px-[20%]">
      <div className="grid gap-[20px] relative md:h-[400px]">
        <div className="md:absolute h-full">
          <Image
            src={"/images/mobile/image-interactive.jpg"}
            alt="titleImg"
            sizes="1000px"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-[20px] bg-white md:px-[60px] md:pt-[60px] md:max-w-[500px] md:absolute bottom-0 right-0">
          <span className="text-4xl text-center md:text-left">
            {"The leader in interactive VR".toUpperCase()}
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente asperiores
            eligendi corporis voluptatem ratione nihil qui ipsa illum laudantium quia
            nesciunt dolore ab rem, odio commodi iure provident debitis molestiae.
          </span>
        </div>
      </div>
      <div className="mt-20 grid justify-items-center md:grid-cols-2">
        <div className="md:row-start-1 md:col-start-1 md:col-end-2 md:justify-self-start">
          <span className="text-4xl">OUR CREATIONS</span>
        </div>
        <div className="mt-10 grid w-full gap-[20px] md:col-span-2 md:grid-cols-4">
          {CreationsData &&
            CreationsData.map((item) => (
              <div
                key={item.title}
                className="relative w-full h-[150px] overflow-hidden md:h-[350px]">
                <picture>
                  <source media="(min-width:768px)" srcSet={item.imgpathDesktop} />
                  <img
                    src={item.imgpathMobile}
                    alt={item.title}
                    width={100}
                    height={100}
                  />
                </picture>
                <div className="absolute top-0 w-[40%] h-full bg-black opacity-50 blur-2xl"></div>
                <div className="absolute bottom-[20px] left-[20px] max-w-[150px]">
                  <span className="text-3xl text-gray-300">
                    {item.title.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-10 flex justify-center items-center md:mt-0 md:row-start-1 md:col-start-2 md:col-end-3 md:justify-self-end">
          <button className="border border-black px-[50px] py-2">
            <span className="tracking-widest">SEE ALL</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Middle;
