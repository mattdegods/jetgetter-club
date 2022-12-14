
import { useState, useEffect } from "react";
import DeMenu from "./Menu"
import Image from "next/image";

const Navbar = ({ menuState }) => {

  const [open, setOpen] = useState(false);

  const onMenuClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(menuState);
  }, [menuState]);

  return (
    <div className="py-6 absolute z-30 top-0 left-0 right-0">
      {/* outer header container */}
      <div className="flex items-center px-8">
        {/* header left - social icons */}
        <div className="hidden sm:flex sm:items-center">
          {/* twitter */}
          <div className="rounded-lg mx-2">
            <a 
              href="https://twitter.com/jetgetterclub"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={"/images/twitter.png"} width={50} height={50} alt="twitter" />
            </a>
          </div>
          {/* discord */}
          <div className="rounded-lg mx-2">
            <a 
              href="https://discord.gg/jetgetterclub"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={"/images/discord.png"} width={50} height={50} alt="discord" />
            </a>
          </div>
          {/* magic eden */}
          <div className="rounded-lg mx-2 p-3">
            <a 
              href="https://magiceden.io/marketplace/jetgetter"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={"/images/magiceden.png"} width={45} height={28} alt="magic eden" />
            </a>
          </div>
        </div>

        {/* header right: navigating pages */}
        <div
          className={`flex space-x-[32px] items-center ml-auto mr-[64px]`}
        >
          <DeMenu
            open={open}
            handleMenu={onMenuClick}
          />
        </div>
        <div 
          className="ml-auto mr-3 hover:cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <svg
            className="fill-lounge-gold"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447715 2 0 1.55228 0 1ZM0 9C0 8.44772 0.447715 8 1 8H21C21.5523 8 22 8.44772 22 9C22 9.55229 21.5523 10 21 10H1C0.447715 10 0 9.55229 0 9ZM0 17C0 16.4477 0.447715 16 1 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H1C0.447715 18 0 17.5523 0 17Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
