import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRef } from "react";
import SitesNav from "../components/SitesNav";

export default function App({ Component, pageProps }: AppProps) {
  const outterDiv = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={outterDiv} className="relative">
        <Head>
          <title>안녕하세요. 이찬휘입니다</title>
          <meta name="description" content="포트폴리오_이찬휘" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SitesNav />
        <Component {...pageProps} />
      </div>
    </>
  );
}
