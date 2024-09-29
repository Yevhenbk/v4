import React from "react";

interface Props {
  children: React.ReactNode
}

export default function Button({
  children
}: Props) {
  return (
    <button className="py-1 px-3 rounded-md bg-transparent border border-midground text-white text-xs
    hover:cursor-pointer hover:bg-midground">
      {children}
    </button>
  );
};
