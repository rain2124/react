/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  return (
    <>
      <div css={Container}>
        <p css={Title}>Emotion</p>
        <SButton>fight!!</SButton>
      </div>
    </>
  )
}

// emotionが良さげ？
const Container = css`
  display: flex;
  margin: 8px;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
  background-color: #39eff3;
`;
const Title = css`
  margin: 0;
  color: #000;
  &:hover {
    color: red;
  }
`;
const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
