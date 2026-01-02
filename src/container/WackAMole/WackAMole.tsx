interface WackAMoleProps {
  size: number;
}

const WackAMole = ({ size }: WackAMoleProps) => {
  console.log(size, "size");
  return (
    <div>
      {Array.from({ length: size }).map((_value, index) => {
        return (
          <div key={index} className="flex">
            {Array.from({ length: size }).map((value, index) => (
              <div key={index} className="size-10 bg-red-500 flex">
                cell
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default WackAMole;
