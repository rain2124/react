import React from 'react';

const InputFormEdit = (props) => {
  const { value, onChange, onClick, onClickCancel} = props;
  return (
    <>
      <div>
        <input
          type="text"
          label="新しいタイトル"
          value={value}
          onChange={onChange}
        />
        <button onClick={onClick}>編集を保存</button>
        <button onClick={onClickCancel}>キャンセル</button>
      </div>
    </>
  );
};
export default InputFormEdit;