import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import Heading from "@/components/Heading";
import PricingPage from "@/components/PricingPage";
import Start from "@/components/Start";
import TestimonialsCard from "@/components/TestimonialsCard";
import FeatureBlock from "@/components/featureBlock";
import { Testimonials } from "@/constants/Testimonials";
import { clients } from "@/constants/clients";
import { Feauters, featuresBlock } from "@/constants/features";
import {
  ArrowRightCircle,
  MoveRight,
  MoveRightIcon,
  PlayCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased">
      <div className="relative container">
        <Image
          src="/bg.png"
          alt="Background Image"
          width={1200}
          height={1000}
          className="absolute top-0 left-0 -z-50 opacity-10 "
        />
        <section id="home" className="relative">
          <figure className="bubble bg-[#667BC6] lg:w-[520px] top-16 -left-40 h-96 w-96" />
          <figure className="bubble bg-[#4C3BCF] lg:w-[420px] bottom-16 -right-20 md:bottom-44 md:right-20 h-96 w-96" />
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6 ">
              <Start />
              <div className="flex items-center gap-4 box">
                <Link href="#pricing">
                  <Button variants="primary">
                    <h1 className="truncate font-bold">Get Started</h1>
                    <MoveRight />
                  </Button>
                </Link>

                <Link href="#pricing">
                  <Button variants="outline">
                    <h1 className=" truncate">View Pricing</h1>
                  </Button>
                </Link>
              </div>
            </div>
            <span className="box z-10  absolute max-sm:top-[60%] max-sm:left-[41%] top-[50%] left-[47%]">
              <PlayCircle className="w-20 h-20 cursor-pointer max-sm:top-[60%] max-sm:left-[41%] max-sm:w-16 max-sm:h-16 absolute top-[50%] left-[47%] z-10 text-[#4B70F5] hover:scale-110 transition-all hover:text-[#8DECB4]" />
            </span>
            <Image
              src="/Hero-image.svg"
              alt="banner"
              width={670}
              height={370}
              className="mx-auto shadow-xl box lg:w-[1000px] lg:h-[650px] opacity-75"
            />
          </div>
        </section>

        <section
          id="clients"
          className=" max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={client.imageUrl}
                alt={client.alt}
                width={100}
                height={80}
                className="w-40 md:w-full object-contain mx-auto"
              />
            </div>
          ))}
        </section>

        <section
          id="features"
          className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28 "
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <Image
              src="/bg2.png"
              alt="background"
              width={1920}
              height={1080}
              className="absolute opacity-5 -z-50 top-0 left-0 w-full object-cover"
            />
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start boxx">
              <Heading title="Powerful features to help you manage all your leads." />
              <p className=" lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8 text-base">
                Apsum dolor sit amet consectetur. Aliquam elementum elementum in
                ultrices. Dui maecenas ut eros turpis ultrices metus morbi
                aliquet vel.
              </p>
              <Button>Get Started</Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4 boxx">
              {Feauters.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          {featuresBlock.map((item, index) => (
            <FeatureBlock key={index} {...item} />
          ))}
        </section>

        <PricingPage />
        <section id="Testimonials" className="">
          <Heading title="Meet our Customers" isCentered={true} />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
            {Testimonials.map((item, index) => (
              <TestimonialsCard key={index} {...item} />
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <Heading title="Let’s try our service now!" />
              <p className="text-[#94A3B8] mt-3 max-w-[50rem] leading-normal ">
                Experience the power of Ocean CRM dashboard for engineering
                teams. Boost productivity and streamline collaboration. Get
                started today!
              </p>
            </div>
              <Button>
                Get Started
                <MoveRightIcon/>
              </Button>
          </div>
        </section>

      </div>
    </main>
  );
}
