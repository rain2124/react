/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type InputType = {
  placeholder: string;
}
export const Input = (props: InputType) => {
  // デフォルトで空文字入れると丁寧
  const {placeholder = "" } = props;
  return <input css={InputArea} type='text' placeholder={placeholder}></input>
}
export const InputArea = css`
  border-radius: 9999px ;
  padding: 8px 16px;
  border: 1px solid #ddd;
  outline: none;
`;

