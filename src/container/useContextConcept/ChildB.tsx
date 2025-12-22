import { useContext } from "react";
import { ParentContext } from "./Parent";

const ChildB = () => {
  const count = useContext(ParentContext);
  console.log(count.count);
  return (
    <div>
      <h1>ChildB</h1>
    </div>
  );
};

export default ChildB;
