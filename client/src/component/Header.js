
import React from "react";
import { BsBag } from "react-icons/bs";
// import logo from "Logo.png";

const Header = () => {
  return (
    <>
      <header className="">
        <div>
          <img className="" src="Logo.png" alt="logo" />
        </div>

        <nav className= "">
          <div>
            <a
l              href="https://buy.stripe.com/test_eVa3d253o51a5Ww144"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsBag className="text-2xl" />
            </a>
          </div>
        </nav>

        <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-black rounded-full flex justify-center items-center"></div>
      </header>
    </>
  );
};

export default div;
