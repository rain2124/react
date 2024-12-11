const InputForm = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div>
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
export default InputForm;