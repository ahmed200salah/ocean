import { Feature } from "@/types/interfaces";
import Image from "next/image";
import { FC } from "react";
import Heading from "./Heading";

interface FeatureBlockProps extends Feature {

}

const FeatureBlock: FC<FeatureBlockProps> = ({ content, imageUrl, title,isReversed=false }) => {
  return (
    <article className={`flex flex-col lg:flex-row items-center justify-between gap-8 boxxx  ${isReversed && "lg:flex-row-reverse"}`}>
      <Image
        src={imageUrl}
        alt={imageUrl}
        width={300}
        height={300}
        className="w-full lg:w-1/2 shadow-2xl object-cover rounded-lg"
      />
      <div className="flex flex-col md:text-center lg:text-start gap-4 md:gap-6 lg:w-1/2 ">
        <Heading title={title} />
        <p className="mt-3 lg:max-w-[40rem] text-base line-clamp-4">{content}</p>
      </div>
    </article>
  );
};

export default FeatureBlock;
