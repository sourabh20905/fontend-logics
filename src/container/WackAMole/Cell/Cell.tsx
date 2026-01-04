import { Dispatch, SetStateAction, useState } from "react";

interface CellProps {
  index?: number;
  row?: number;
  col?: number;
  molPos?: number[];
  setScore?: Dispatch<SetStateAction<number>>;
}

const Cell = ({ row, col, molPos, setScore }: CellProps) => {
  const [isHammer, setIsHammer] = useState(false);

  const handleHammer = () => {
    setIsHammer(true);
    if (row === molPos?.[0] && col === molPos?.[1]) {
      setScore?.((prev: number) => prev + 1);
    }
    setTimeout(() => {
      setIsHammer(false);
    }, 1000);
  };

  return (
    <div className="size-10 border border-gray-300 flex items-center justify-center relative" onClick={handleHammer}>
      {row === molPos?.[0] && col === molPos?.[1] && "mole"}
      {isHammer && (
        <div className="absolute top-0 left-0">
          Hammer
        </div>
      )}
    </div>
  );
};

export default Cell;
