"use client";

import Image from "next/image";
import React from "react";

export const VsCircle: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="">
      <Image src={image} width={62} height={62} alt="VsCircle" />
    </div>
  );
};
