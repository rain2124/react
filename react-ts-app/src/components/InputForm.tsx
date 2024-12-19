
type TProps = {
  label: string
  value: string
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
  buttonLabel1: string
  buttonLabel2?: string
  onClick1: () => void
  onClick2?: () => void
}
const InputForm = (props: TProps) => {
  const { label, value, onChange, buttonLabel1, buttonLabel2, onClick1, onClick2 } = props;
  return (
    <div>
      {label}：
      <input
        type="text"
        placeholder={label}
        value={value}
        onChange={onChange}
      />
      <button onClick={onClick1}>{buttonLabel1}</button>
      {onClick2 && <button onClick={onClick2}>{buttonLabel2}</button>}
    </div>
  );
};
export default InputForm;
