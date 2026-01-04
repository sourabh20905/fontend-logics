"use client";
import { useEffect, useState } from "react";
import Cell from "./Cell/Cell";
import { getMolePosition } from "./WackAMole.utils";

interface WackAMoleProps {
  size: number;
}

const WackAMole = ({ size }: WackAMoleProps) => {
  console.log(size, "size");
  const [molPos, setMolPos] = useState(getMolePosition(size));
  console.log(molPos, "molPos");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMolPos(getMolePosition(size));
    }, 1500);
    return () => clearInterval(intervalId);
  }, [size]);
  
  return (
    <div>
      {Array.from({ length: size }).map((_item, row) => {
        return (
          <div key={row} className="flex">
            {Array.from({ length: size }).map((_item, col) => (
              <div key={col}>
                <Cell row={row} col={col} molPos={molPos} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default WackAMole;
