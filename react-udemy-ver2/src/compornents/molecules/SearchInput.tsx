/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from "@emotion/react";
import { PrimaryButton } from '../atom/button/PrimaryButton'
import { Input } from '../atom/inputarea/Input';


export const SearchInput = () => {
  return (
    <>
      <div css={Container}>
        <Input placeholder='aaa'/>
        <div css={ButtonWrapper}>
          <PrimaryButton>検索</PrimaryButton>
        </div>
      </div>
    </>
  )
}

const Container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;
const ButtonWrapper = css`
  padding-left: 6px;
`;