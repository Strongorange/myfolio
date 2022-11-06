import React, { useEffect } from "react";
import { useScrollDirection } from "../api/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`flex-ic sticky  z-10 flex w-full  bg-transparent px-[5rem] font-['Pretendard'] transition-all duration-500 ${
        scrollDirection === "down" ? "top-[-5rem]" : "top-0"
      } `}
    >
      <nav className="flex-ic flex w-full justify-between">
        <div className="font-['Pretendard'] text-[3rem] text-[#ff5c00]">
          로고
        </div>
        <div className="flex-ic flex gap-[1rem] font-['Pretendard'] text-[2rem] text-[#ff5c00]">
          <div>
            <span className="text-[#fe22c9]">01.</span>
            <span> About</span>
          </div>
          <div>
            <span className="text-[#fe22c9]">02.</span>
            <span> About</span>
          </div>
          <div>
            <span className="text-[#fe22c9]">03.</span>
            <span> About</span>
          </div>
          <div>
            <span className="text-[#fe22c9]">04.</span>
            <span> About</span>
          </div>
          <div>Resume</div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
