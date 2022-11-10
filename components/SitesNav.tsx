import React from "react";
import { useScrollDirection } from "../utils/useScrollDirection";
import Image from "next/image";
import GitLogo from "../assets/git_logo.png";

const SitesNav = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`fixed left-0 bottom-10 flex h-[1/2] w-[5vw] flex-col gap-10  transition-all duration-500 ${
        scrollDirection === "down"
          ? "bottom-[-15vh] left-[5rem]"
          : "bottom-[10vh] left-[5rem]"
      }`}
    >
      <div>
        <Image alt="" src={GitLogo} width={40} height={40} />
      </div>
      <div>
        <Image alt="" src={GitLogo} width={40} height={40} />
      </div>
    </div>
  );
};

export default SitesNav;
