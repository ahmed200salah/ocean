"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ScrollTrigger } from "gsap/all";

export default function Logo() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".nav-link",
      {
        scale: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power1.inOut",
        delay: 5,
      },
      {
        scale: 1,
        stagger: 0.3,
        ease: "power1.inOut",
        delay: 5,
      }
    );
    gsap.from(".box", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.3,
      delay: 5,
    });
    gsap.from(".boxx", {
      scrollTrigger: {
        trigger: ".boxx",
        start: "top center",
        end: "bottom center",
      },
      x: 1000,
      opacity: 0,
      stagger: 0.3,
    });
    gsap.from(".boxxx", {
      scrollTrigger: {
        trigger: ".boxxx",
        start: "top center",
        end: "bottom center",
      },
      x: -1000,
      opacity: 0,
      stagger: 1,
    });
    gsap.from(".Pricing", {
      scrollTrigger: {
        trigger: ".Pricing",
        start: "top center",
        end: "bottom center",
      },
      opacity: 0,
      x: 100,
      ease: "power3.inOut",
      duration: 1,
    });
  });

  return (
    <div className="hover:scale-105 active:scale-95 transition-all z-50">
      <Link href={"#home"} className="flex items-end gap-2 nav-link">
        <Image src={"/logo.png"} alt="Logo" width={36} height={36} />
        <div className="relative nav-link">
          <h1 className="capitalize text-[#FDFFD2] text-2xl font-bold tracking-wide">
            ocean
          </h1>
          <div className="absolute -right-2.5 bottom-1.5 w-2 h-2 rounded-full bg-sky-700" />
        </div>
      </Link>
    </div>
  );
}
