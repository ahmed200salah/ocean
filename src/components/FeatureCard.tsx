import { Feature } from "@/types/interfaces";
import Image from "next/image";
import { FC } from "react";

interface FeatureCardProps extends Feature {}

const FeatureCard: FC<FeatureCardProps> = ({ content, imageUrl, title }) => {
  return (
    <article className="border-2 transition-all rounded-lg border-transparent hover:border-sky-700 py-4 px-8 lg:max-w-[36rem] md:max-w-[30rem] w-full cursor-pointer hover:bg-slate-800">
      <article className="boxx flex flex-col items-center md:items-start lg:flex-row lg:items-center gap-6">
        <Image src={imageUrl} alt={title} width={100} height={100} />
        <div className="flex flex-col text-center md:text-start space-y-1">
          <h4 className="font-bold text-md text-white max-sm:text-3xl max-sm:mb-4">{title}</h4>
          <p className="text-base leading-6 line-clamp-3">{content}</p>
        </div>
      </article>
    </article>
  );
};

export default FeatureCard;
