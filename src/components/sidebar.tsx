import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  sideBarRef: React.RefObject<HTMLDivElement>;
  handleSidebar: (value: boolean) => void;
  MenuList: { name: string; path: string }[];
};

function Sidebar({ sideBarRef, handleSidebar, MenuList }: Props) {
  return (
    <div
      ref={sideBarRef}
      className="fixed right-0 top-0 bg-black w-full min-h-screen p-10 z-[80] translate-x-[100%] transition-transform xl:hidden">
      <div className=" w-full flex justify-between">
        <div>
          <Image src={"/images/logo.svg"} alt="logo" width={100} height={100} />
        </div>
        <div className="w-[30px] cursor-pointer" onClick={() => handleSidebar(false)}>
          <Image src={"/images/icon-close.svg"} alt="closeLogo" width={30} height={30} />
        </div>
      </div>
      <div className="grid gap-[20px] mt-[230px]">
        {MenuList.map((item) => (
          <Link key={item.name} href={item.path} onClick={() => handleSidebar(false)}>
            <span className="text-4xl text-gray-300 cursor-pointer">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
