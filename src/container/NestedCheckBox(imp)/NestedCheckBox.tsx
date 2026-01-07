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
      const isChecked = e.target.checked;

      setChecked((prev) => {
        const newState = { ...prev };
        console.log(newState, "newState");

        //  Update node and all children
        const updateChildren = (n: CheckboxNode) => {
          newState[n.id] = isChecked;
          console.log(newState, "updateChildren");
          n.children?.forEach(updateChildren);
        };

        updateChildren(node);

        //  Recalculate parents (bottom-up)
        const updateParents = (n: CheckboxNode): boolean => {
          if (!n.children || n.children.length === 0) {
            return newState[n.id] ?? false;
          }

          const allChildrenChecked = n.children.every(updateParents);
          newState[n.id] = allChildrenChecked;
          return allChildrenChecked;
        };

        // start from ROOT
        checkboxes.forEach(updateParents);

        return newState;
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
