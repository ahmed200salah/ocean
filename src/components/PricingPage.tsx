"use client";
import { PricingItems } from "@/constants/Pricing";
import Heading from "./Heading";
import PricingCard from "./PricingCard";
import { useState } from "react";
import { PricingMode } from "@/types/interfaces";
export default function PricingPage() {
  const [Mode, setMode] = useState<PricingMode>("monthly");

  return (
    <section id="pricing" className="flex flex-col gap-8 Pricing">
      <Heading title="Find a plan to power your projects" isCentered={true} />
      <div className="max-w-[12rem] w-full mx-auto p-1 flex  text-base bg-slate-800 rounded-lg">
        <p
          onClick={() => setMode("monthly")}
          className={`basis-1/2 transition-all text-center py-2 text-white capitalize font-semibold tracking-wide rounded-lg cursor-pointer ${
            Mode === "monthly" ? "bg-[#37B7C3]" : ""
          }`}
        >
          Monthly
        </p>
        <p
          onClick={() => setMode("annually")}
          className={`basis-1/2 transition-all text-center py-2 text-white capitalize font-semibold tracking-wide rounded-lg cursor-pointer ${
            Mode === "annually" ? "bg-[#37B7C3]" : ""
          }`}
        >
          Annually
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PricingItems.map((item, index) => (
          <PricingCard key={index} {...item} mode={Mode} />
        ))}
      </div>
    </section>
  );
}
