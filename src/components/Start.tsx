import { ArrowRightCircle } from "lucide-react";
import React from "react";
import Heading from "./Heading";
import Link from "next/link";

export default function Start() {
  return (
    <>
      <p
        className=" capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-400
              hover:bg-slate-800 shadow-md transition-colors box
              "
      >
        new features is now available
        <ArrowRightCircle className="inline ml-1 w-4" />
      </p>
      <Heading title="A CRM dashboard for engineering teams" />
      <p className="line-clamp-2 max-w-[46rem] leading-7 max-sm:text-base box ">
        Boost engineering team’s productivity with{" "}
        <Link
          href={"/"}
          className="text-[#FDFFD2] underline opacity-70 hover:opacity-100"
        >
          Ocean
        </Link>{" "}
        CRM dashboard that streamlines project management, collaboration, and
        data-driven decision-making.
      </p>
    </>
  );
}
