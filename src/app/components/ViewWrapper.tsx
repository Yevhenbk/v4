import React from "react";

interface Props {
  children: React.ReactNode
};

export default function ViewWrapper({
  children
}: Props) {
  return (
    <div>
      {children}
    </div>
  );
};
