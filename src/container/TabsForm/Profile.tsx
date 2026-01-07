import { Dispatch, SetStateAction } from "react";
import { FormDataType } from "./TabForm.types";

interface ProfileProps {
  data: FormDataType;
  setData: Dispatch<SetStateAction<FormDataType>>;
}

export default function Profile({ data, setData }: ProfileProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(data, "data");
  };
  return (
    <div className="flex flex-col gap-10">
      <label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="p-4 border border-gray-200 rounded-md"
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="p-4 border border-gray-200 rounded-md"
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="numeric"
          placeholder="age"
          name="age"
          className="p-4 border border-gray-200 rounded-md"
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
