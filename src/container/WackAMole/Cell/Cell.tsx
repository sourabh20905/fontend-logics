interface CellProps {
  index?: number;
  row?: number;
  col?: number;
  molPos?: number[];
}

const Cell = ({ row, col, molPos }: CellProps) => {
  return (
    <div className="size-10 border border-gray-300 flex items-center justify-center">
      {row === molPos?.[0] && col === molPos?.[1] && "mole"}
    </div>
  );
};

export default Cell;
