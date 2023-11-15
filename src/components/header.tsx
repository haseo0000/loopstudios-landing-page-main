import Image from "next/image";
import React, { useRef } from "react";

const MenuList = ["About", "Careers", "Events", "Products", "Support"];

function Header() {
  const sideBarRef = useRef<HTMLDivElement>(null);

  const handleSidebar = (value: boolean) => {
    const Body = document.querySelector("body");
    if (Body) {
      Body.style.overflowY = `${value ? "hidden" : "auto"}`;
    }
    if (sideBarRef.current) {
      sideBarRef.current.style.transform = `translateX(${value ? "0" : "100%"})`;
    }
  };

  return (
    <div className="absolute top-0 z-50 w-full p-[25px] flex items-center justify-between md:px-[10%]">
      <div>
        <Image
          src={"/images/logo.svg"}
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </div>
      <div className="cursor-pointer md:hidden" onClick={() => handleSidebar(true)}>
        <Image src={"/images/icon-hamburger.svg"} alt="menuLogo" width={30} height={20} />
      </div>
      <div className="hidden md:flex gap-[30px]">
        {MenuList.map((item) => (
          <span key={item} className="text-gray-300 cursor-pointer">
            {item}
          </span>
        ))}
      </div>
      {/* sidebar */}
      <div
        ref={sideBarRef}
        className="fixed right-0 top-0 bg-black w-full min-h-screen p-10 translate-x-[100%] transition-transform md:hidden">
        <div className=" w-full flex justify-between">
          <div>
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </div>
          <div className="w-[30px] cursor-pointer" onClick={() => handleSidebar(false)}>
            <Image
              src={"/images/icon-close.svg"}
              alt="closeLogo"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="grid gap-[20px] mt-[230px]">
          {MenuList.map((item) => (
            <span key={item} className="text-4xl text-gray-300 cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
