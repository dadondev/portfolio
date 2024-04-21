"use client";
import Image from "next/image";
import Social from "./Social";
import Techno from "./Techno";
import { useEffect, useState } from "react";

const Hero = () => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    setWidth(window.outerWidth);
  }, []);
  return (
    <div className="min-h-[60dvh]">
      <article className="px-[22px] pt-[46px] md:px-0">
        {width >= 768 ? (
          <Image
            src="/wide.svg"
            alt="web"
            width="100"
            height={100}
            className="min-w-full min-h-[197px]"
          />
        ) : (
          <Image
            src="/web.svg"
            alt="web"
            width="100"
            height={100}
            className="min-w-full min-h-[197px]"
          />
        )}
      </article>
      <div className="mb-[42px] flex flex-col gap-[42px] md:flex-row md:justify-between">
        <article className="px-[26px] max-w-[467px] md:px-0">
          <h1 className="text-[35px] font-bold text-black lg:text-[48px]">
            Hi, I’m Karimberdi ✌️
          </h1>
          <p className="text-[18px] text-gray lg:text-xl">
            Digital And Web Developer Focused on creating digital interfaces
            that just work.
          </p>
        </article>
        <article className="flex flex-wrap gap-4 px-[26px] md:px-0">
          <Social
            text="Instagram"
            parsing="https://instagram.com/dadon.dev"
            url="/insta.svg"
          />
          <Social
            text="Twitter"
            parsing="https://x.com/dadondev"
            url="/x.svg"
          />
        </article>
      </div>
      <article className="px-[26px] flex flex-wrap gap-[10px] md:px-0">
        <Techno url="/html.svg" />
        <Techno url="/css.svg" />
        <Techno url="/boot.svg" />
        <Techno url="/tailwind.svg" />
        <Techno url="/ks.svg" />
        <Techno url="/react.svg" />
        <Techno url="/nextjs.svg" />
      </article>
    </div>
  );
};

export default Hero;
