import { Testimonials } from "@/types/interfaces";
import { Quote } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface TestimonialsCardProps extends Testimonials {}

const TestimonialsCard: FC<TestimonialsCardProps> = ({
  imageUrl,
  name,
  review,
  role,
}) => {
  return (
    <article className="flex flex-col items-center justify-between md:items-start gap-4 py-6 px-4 rounded-lg hover:bg-slate-700 capitalize">
      <Quote className="w-12 h-12 text-sky-600" />
      <p className="text-lg text-center md:text-start">{review}</p>
      <div className="flex items-start gap-2">
        <Image
        src={imageUrl}
        alt={name}
        width={40}
        height={40}
        className=" object-cover rounded-full"
        />
        <div>
            <h4 className="text-white font-bold tracking-wide">{name}</h4>
            <small className=" text-sky-600 font-semibold">{role}</small>
        </div>
      </div>
    </article>
  );
};

export default TestimonialsCard;
