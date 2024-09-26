import React from "react";

interface Props {
  children: React.ReactNode
};

export default function HomeView({
  children
}: Props) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {children}
    </div>
  );
};
