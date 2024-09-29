import React from "react";
import Button from "./Button";

export default function Header() {
  return (
    <div className="flex flex-col gap-5 max-w-[15rem] min-[1000px]:pl-8 min-[1000px]:max-w-[20rem]">
      <div className="flex flex-col">

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
