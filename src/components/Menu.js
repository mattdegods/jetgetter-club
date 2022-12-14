import React, { useState } from "react";
import Link from "next/link";
import Close from "./Close";

export const Menu = ({ open, handleMenu }) => {
  const [numCloses, setNumCloses] = useState(0);

  return (
    <>
      <div
        className={`flex items-start overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 translate-x-full z-50 w-screen h-screen 
          ${
            open &&
            "transition -translate-x-0 ease-in-out duration-200 lg:duration-800"
          } 
          ${
            !open &&
            numCloses > 0 &&
            "transition translate-x-full ease-in-out duration-200 lg:duration-800"
          }`}
        onClick={() => handleMenu()}
      >
        <div
          className={`text-black bg-lounge-white-couch absolute min-h-screen w-screen lg:w-1/3 4xl:w-[40%] top-0 right-0 py-4 px-8 lg:px-12 shadow-2xl`}
        >
          {/* header - laptop/monitor */}
          <div className="flex justify-between lg:items-start lg:mt-6">
            <h2 className={`text-lounge-gold lg:text-[40px] py-10`}>
              JetGetter Club Features
            </h2>
            <div
              className="cursor-pointer p-4 transition ease-in-out duration-300 sm:hover:-translate-y-1 sm:hover:scale-110"
              onClick={() => {
                handleMenu();
                setNumCloses(numCloses + 1);
              }}
            >
              <Close color={"black"} />
            </div>
          </div>

          {/* menu */}
          <div
            className={`mt-10 flex flex-col justify-between text-lounge-gold text-2xl h-[500px] w-fit`}
          >
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>Benefits</a>
            </Link>
            <a
              href="https://hangar.jetgetterclub.com"
              target="_blank"
              rel="noreferrer"
            >
              Stake
            </a>
            <a
              href="https://ok36rkws7e8.typeform.com/to/Kc94h4pN"
              target="_blank"
              rel="noreferrer"
            >
              Mint a Vacation
            </a>
            <a
              href="https://docs.jetgetterclub.com/jetgetter-club/jetgetters"
              target="_blank"
              rel="noreferrer"
            >
              JetGetter Documentation
            </a>
          </div>

          {/* spacing for 3xl+ */}
          <div className="3xl:h-[200px]"></div>

          {/* footer images - laptop & monitor */}
        </div>
      </div>
    </>
  );
};

export default Menu;
