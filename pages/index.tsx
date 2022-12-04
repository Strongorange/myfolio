import Header from "../components/Header";
import Main from "../components/Main";
import Section2 from "../components/Section2";
import { divRefs } from "../store/myStore";
import { useAtom } from "jotai";
import SitesNav from "../components/SitesNav";
import Particle from "../components/Particle";

export default function Home() {
  const [eleRefs] = useAtom(divRefs);

  return (
    <div className="flex w-full flex-col  ">
      <Header
        ref={(el: HTMLDivElement) => {
          eleRefs.current[0] = el;
        }}
      />
      <Main
        ref={(el: HTMLDivElement) => {
          eleRefs.current[1] = el;
        }}
      />

      <Section2
        ref={(el: HTMLDivElement) => {
          eleRefs.current[2] = el;
        }}
      />
    </div>
  );
}
