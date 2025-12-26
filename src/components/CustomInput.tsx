interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
}

const CustomInput = ({ value, onChange }: CustomInputProps) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
