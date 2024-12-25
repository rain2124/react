/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from "@emotion/react";
// import styled from "@emotion/styled";
import { BaseButton } from './BaseButton';

type TProps = {
  children: string
}

export const PrimaryButton = (props: TProps) => {
  const {children} = props;
  return (
    <>
      <button css={ButtonPrimary}>{ children }</button>
    </>
  )
}

const ButtonPrimary = css`
  ${BaseButton};
  background: #40514e;
`;

