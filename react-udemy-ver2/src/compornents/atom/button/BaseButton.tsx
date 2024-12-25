/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const BaseButton = css`
  color: #fff;
  letter-spacing: .01em;
  cursor: pointer;
  border: none;
  border-radius: 9999px;
  padding: 6px 24px;
  transition: all .5s;
  &:hover {
    opacity: 0.8;
  }
`;

