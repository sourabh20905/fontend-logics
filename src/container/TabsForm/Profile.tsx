interface ProfileProps {
  data: any;
  setData: any;
}

export default function Profile({ data, setData }: ProfileProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    e.preventDefault();
    setData((prev) => {
      return {
        ...prev,
        [value]: e.target.value,
      };
    });
  };
  return (
    <div className="flex flex-col gap-10">
      <label>
        <input
          type="text"
          placeholder="Name"
          className="p-4 border border-gray-200 rounded-md"
          onChange={(e) => handleChange(e, "name")}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Email"
          className="p-4 border border-gray-200 rounded-md"
          onChange={(e) => handleChange(e, "email")}
        />
      </label>
      <label>
        <input
          type="numeric"
          placeholder="age"
          className="p-4 border border-gray-200 rounded-md"
          onChange={(e) => handleChange(e, "age")}
        />
      </label>
    </div>
  );
}
