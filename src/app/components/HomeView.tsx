import React from "react";

interface Props {
  children: React.ReactNode
};

export default function HomeView({
  children
}: Props) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-foreground m-4 p-2 rounded-xl
    flex flex-col items-center min-[1000px]:items-start gap-6 min-[1000px]:w-[50vw] w-full-minus-2
    border border-midground">
      {children}
    </div>
  );
};
