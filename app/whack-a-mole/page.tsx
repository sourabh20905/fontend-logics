"use client";

import dynamic from "next/dynamic";

const WackAMole = dynamic(() => import("@/src/container/WackAMole"), {
  ssr: false,
});

const WhackAMolePage = () => {
  return (
    <div>
      <WackAMole size={4} />
    </div>
  );
};

export default WhackAMolePage;
