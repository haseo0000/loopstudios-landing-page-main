import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Sidebar from "./sidebar";

const MenuList = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Careers",
    path: "/careers",
  },
  {
    name: "Events",
    path: "/events",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Support",
    path: "/support",
  },
];

function Header() {
  const router = useRouter();
  const path = router.pathname;

  const sideBarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleSidebar = (value: boolean) => {
    const Body = document.querySelector("body");
    if (Body) {
      Body.style.overflowY = `${value ? "hidden" : "auto"}`;
    }
    if (sideBarRef.current) {
      sideBarRef.current.style.transform = `translateX(${value ? "0" : "100%"})`;
    }
  };

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.position = `${path === "/" ? "absolute" : "relative"}`;
    }
  }, [path]);

  return (
    <>
      <div
        ref={menuRef}
        className="absolute top-0 z-50 w-full p-[25px] flex items-center justify-between xl:px-[10%]">
        <Link href={"/"}>
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>
        <div className="cursor-pointer xl:hidden" onClick={() => handleSidebar(true)}>
          <Image
            src={"/images/icon-hamburger.svg"}
            alt="menuLogo"
            width={30}
            height={20}
          />
        </div>
        <div className="hidden xl:flex gap-[30px]">
          {MenuList.map((item) => (
            <Link key={item.name} href={item.path}>
              <span className="text-gray-300 cursor-pointer">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <Sidebar
        sideBarRef={sideBarRef}
        handleSidebar={handleSidebar}
        MenuList={MenuList}
      />
    </>
  );
}

export default Header;
