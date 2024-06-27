"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);
export default function Loader() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".text", {
      opacity: 0,
      x: -40,
      duration: 1.5,
      ease: "power3.inOut",
    });
    tl.from(".logo", {
      opacity: 0,
      y: 40,
      duration: 1.5,
      ease: "power3.inOut",
    });

    tl.to(".logo", {
      opacity: 0,
      y: -40,
      ease: "power3.inOut",
    });
    tl.to(".text", {
      opacity: 0,
      x: 40,
      ease: "power3.inOut",
    });
    tl.to(".loader", {
      opacity: 0,
      duration: 1,
      zIndex: 0,
    });
  });
  return (
    <>
      <div className="loader w-full h-svh fixed z-[99999999] flex top-0 justify-center items-center gap-2 font-bold text-xl bg-[#0F172A] text-white">
        <h1 className="text">Welcome To</h1>
        <div>
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={50}
            height={50}
            className="w-full h-full logo"
          />
        </div>
        <h1 className="capitalize text-[#FDFFD2] text-2xl font-bold tracking-wide text">
          ocean
        </h1>
      </div>
    </>
  );
}
