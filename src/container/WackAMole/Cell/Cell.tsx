interface CellProps {
  key: number;
  index?: number;
  row?: number;
  col?: number;
  molPos?: number[];
}

const Cell = ({ key, row, col, molPos }: CellProps) => {
  return (
    <div
      key={key}
      className="size-10 border border-gray-300 flex items-center justify-center"
    >
      {row === molPos?.[0] && col === molPos?.[1] ? "mole" : "empty"}
    </div>
  );
};

export default Cell;
