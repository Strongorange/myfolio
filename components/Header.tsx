import React, { forwardRef, useEffect } from "react";
import { useScrollDirection } from "../utils/useScrollDirection";
import { useAtom } from "jotai";
import { divRefs } from "../store/myStore";
import { scrollToDiv } from "../utils/scrollToDiv";

type PropsType = {};
type RefType = HTMLDivElement;

const Header = forwardRef<RefType, PropsType>((props, ref) => {
  const scrollDirection = useScrollDirection();
  const [eleRefs] = useAtom(divRefs);

  return (
    <div
      className={`flex-ic sticky z-10 flex w-full  bg-transparent px-[5rem] font-['Pretendard'] transition-all duration-500 ${
        scrollDirection === "down" ? "top-[-5rem]" : "top-0"
      } `}
      ref={ref}
    >
      <nav className="flex-ic flex w-full justify-between">
        <div className="font-['Pretendard'] text-[3rem] text-[#ff5c00]">
          로고
        </div>
        <div className="flex-ic flex gap-[1rem] font-['Pretendard'] text-[2rem] text-[#ff5c00]">
          <div onClick={() => scrollToDiv(eleRefs, 1)}>
            <span className="text-[#fe22c9]">01.</span>
            <span> Home</span>
          </div>
          <div onClick={() => scrollToDiv(eleRefs, 2)}>
            <span className="text-[#fe22c9]">02.</span>
            <span> About Me</span>
          </div>
          <div onClick={() => scrollToDiv(eleRefs, 3)}>
            <span className="text-[#fe22c9]">03.</span>
            <span> Skills</span>
          </div>
          <div onClick={() => scrollToDiv(eleRefs, 4)}>
            <span className="text-[#fe22c9]">04.</span>
            <span> Projects</span>
          </div>
          <div>Resume</div>
        </div>
      </nav>
    </div>
  );
});

Header.displayName = "Header";

export default Header;
