import { useState } from "react";
import { checkboxes } from "./config";

interface CheckboxNode {
  id: number;
  name: string;
  children?: CheckboxNode[];
}

interface CheckboxesProps {
  data: CheckboxNode[];
  checked: { [key: number]: boolean };
  setChecked: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
}

const NestedCheckBox = () => {
  const [checked, setChecked] = useState<{ [key: number]: boolean }>({
    1: false,
  });

  const Checkboxes = ({ data, checked, setChecked }: CheckboxesProps) => {
    if (!data || !Array.isArray(data)) {
      return null;
    }

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      node: CheckboxNode
    ) => {
      setChecked((prev) => {
        console.log(prev);
        return {
          ...prev,
          [node.id]: e.target.checked,
        };
      });
    };

    return (
      <div>
        {data.map((node: CheckboxNode) => (
          <div key={node.id} className="ml-6">
            <input
              type="checkbox"
              name={node.name}
              checked={checked[node.id] || false}
              onChange={(e) => handleChange(e, node)}
            />
            {node.name}
            {node.children && (
              <Checkboxes
                data={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <Checkboxes data={checkboxes} checked={checked} setChecked={setChecked} />
    </div>
  );
};

export default NestedCheckBox;
