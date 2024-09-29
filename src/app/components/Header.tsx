import React from "react";
import { LuDot } from "react-icons/lu";
import Button from "./Button";

export default function Header() {
  return (
    <div className="flex flex-col gap-5 max-w-[15rem] min-[1000px]:pl-8 min-[1000px]:max-w-[20rem]">
      <div className="flex flex-row w-full justify-between">
        <div className="flex gap-2 items-center">
          <p className="text-xs font-light text-white">
            Software Engineer
          </p>
        </div>
        <div className=" rounded-xl px-3 py-1 bg-[#263A2F] flex items-center justify-center relative">
          <LuDot className="w-4 h-4 text-[#099552] absolute left-1" />
          <p className="text-[0.5rem] text-[#099552] pl-2">
            Available for work
          </p>
        </div>
      </div>
      <h1 className="text-3xl font-semibold">
        Yevhen Balahutrak
      </h1>
      <p className="text-xs">
        Experienced Software Engineer with a background in developing and integrating web applications. Full time employee at 
        SMARTECNIA SL since January 2024.
      </p>
      <div className="flex gap-2">
        {/* buttons */}
        <Button>
          Hire me
        </Button>
        <Button>
          Something else
        </Button>
      </div>
    </div>
  );
};
