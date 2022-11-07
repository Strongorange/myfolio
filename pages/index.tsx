import Main from "../components/Main";
import Section2 from "../components/Section2";

export default function Home() {
  return (
    <div className="flex h-[300vh] w-full flex-col">
      <Main />
      <div className="h-screen" />
      <Section2 />
    </div>
  );
}
