import { Pricing, PricingMode } from "@/types/interfaces";
import { FC, useRef } from "react";
import Button from "./Button";
import { Check } from "lucide-react";
import { useInView } from "framer-motion";

interface PricingCardProps extends Pricing {
  mode: PricingMode;
}

const PricingCard: FC<PricingCardProps> = ({
  desc,
  features,
  monthPrice,
  title,
  yearPrice,
  glowPosition,
  isMostPopular,
  mode,
}) => {
  const ref =useRef(null)
  const isInView = useInView(ref)
  
  return (
    <article
      ref={ref}
      className={`relative w-full py-6 px-4 flex flex-col space-y-4 lg:space-y-6 rounded-md shadow-xl hover:scale-105 transition-all hover:z-20 ${
        isMostPopular
          ? "border-2 border-[#37B7C3] bg-slate-800"
          : "border border-slate-500"
      }`}
    >
      <h3
        className={`text-3xl max-sm:mb-3 font-bold text-center ${
          isMostPopular ? "text-[#37B7C3]" : "text-white"
        }`}
      >
        {title}
      </h3>
      {isMostPopular && (
        <p className="absolute -top-10 -right-4 bg-[#37B7C3] text-[#4B70F5] font-extrabold text-xs rotate-6	 py-2 px-3 rounded-3xl">
          Most Popular🥳
        </p>
      )}
      <p className="text-base">{desc}</p>
      <h1 className="font-extrabold text-white text-4xl">
        ${mode === "monthly" ? monthPrice : yearPrice}
        <small className="text-base ml-1 font-semibold ps-1 transition-all">
          / {mode === "monthly" ? "month" : "year"}
        </small>
      </h1>
      <Button variants={`${isMostPopular ? "primary" : "secondary"}`}>
        Buy Plan{" "}
      </Button>
      <ul>
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-4 space-y-2 ">
            <Check
              className={`${
                isMostPopular ? "text-[#37B7C3]" : "text-[#4C3BCF]"
              } `}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PricingCard;
