/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from "@emotion/react";
// import styled from "@emotion/styled";
import { BaseButton } from './BaseButton';

type TProps = {
  children: string
}
export const SecondaryButton = (props: TProps) => {
  const {children} = props;
  return (
    <>
      <button css={ButtonSecondary}>{ children }</button>
    </>
  )
}
const ButtonSecondary = css`
  ${BaseButton};
  background: #11999e;
`;

