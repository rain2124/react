import React from 'react';

const InputForm = (props) => {
  const { value, onChange, onClick, filter, onChangeFilter} = props;
  return (
    <>
      <div>
        <input
          type="text"
          label="タイトル"
          value={value}
          onChange={onChange}
        />
        <button onClick={onClick}>作成</button>
        <select value={filter} onChange={onChangeFilter}>
          <option value="all">すべて</option>
          <option value="notStarted">未着手</option>
          <option value="inProgress">作業中</option>
          <option value="done">完了</option>
        </select>
      </div>
    </>
  );
};
export default InputForm;