import React from "react";
import { Logo } from "./Logo";

export const HeroSection: React.FC = () => {
  return (
    <section className="ml-5 w-[57%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-center px-20 pt-10 pb-48 font-medium text-white rounded-3xl bg-gradient-to-r from-blue-700 to-violet-600 max-md:px-5 max-md:py-16 max-md:mt-0 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[450px]">
          <Logo textColor="text-white" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f024c576f74dda1132b834ac48381f4dc8ba027a37988f5db42054856cb1d9"
            alt="Healthcare illustration"
            className="object-contain self-stretch mt-28 w-full aspect-[0.89] max-md:mt-10 max-md:max-w-full"
          />
          <h2 className="mt-10 text-5xl leading-10 text-center max-md:text-4xl max-md:leading-10">
            Your Personal
            <br />
            Heathcare Asisstant
          </h2>
        </div>
      </div>
    </section>
  );
};
