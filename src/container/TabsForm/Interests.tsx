interface InterestProps {
  data: {
    interests: string[];
    [key: string]: unknown;
  };
  setData: React.Dispatch<React.SetStateAction<InterestProps["data"]>>;
}

const Interest = ({ data, setData }: InterestProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter(
            (interest: string) => interest !== e.target.name
          ),
    }));
  };
  return (
    <div className="flex flex-col gap-6">
      <label className="">
        <input
          type="checkbox"
          name="dancing"
          checked={data.interests.includes("dancing")}
          onChange={handleChange}
          className=""
        />
        Dancing
      </label>
      <label>
        <input
          type="checkbox"
          name="singing"
          checked={data.interests.includes("singing")}
          onChange={handleChange}
        />
        Singing
      </label>
      <label>
        <input
          type="checkbox"
          name="reading"
          checked={data.interests.includes("reading")}
          onChange={handleChange}
        />
        Reading
      </label>
    </div>
  );
};

export default Interest;
