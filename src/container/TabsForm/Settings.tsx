interface SettingsProps {
  data: any;
  setData: any;
}

export default function Settings({ data, setData }: SettingsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      settings: {
        theme: e.target.name,
      },
    }));
    console.log(data, "data settings");
  };
  return (
    <div className="flex flex-col gap-6">
      <label>
        <input
          type="radio"
          name="light"
          onChange={handleChange}
          checked={data.settings.theme === "light"}
        />
        light
      </label>
      <label>
        <input
          type="radio"
          name="dark"
          onChange={handleChange}
          checked={data.settings.theme === "dark"}
        />
        dark
      </label>
    </div>
  );
}
