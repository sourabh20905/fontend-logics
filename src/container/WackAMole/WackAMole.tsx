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
    setTimeout(() => {
      setMolPos(getMolePosition(size));
    }, 100);
  }, []);
  return (
    <div>
      {Array.from({ length: size }).map((_item, row) => {
        return (
          <div key={row} className="flex">
            {Array.from({ length: size }).map((_item, col) => (
              <Cell key={col} row={row} col={col} molPos={molPos} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default WackAMole;
