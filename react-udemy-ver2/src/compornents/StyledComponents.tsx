import React from 'react';
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <>
    <SContainer>
      <STitle>StyledComponents</STitle>
      <SButton>fight!</SButton>
    </SContainer>
    </>
  )
}

// バグ対応必要な可能性あり
const SContainer = styled.div`
  display: flex;
  margin: 8px;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
  background-color: #39eff3;
`;
const STitle = styled.p`
  margin: 0;
  color: #000;
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
