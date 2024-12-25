/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from "@emotion/react";

type CardInfo = {
  image: string;
  alt: string;
  name: string;
  address: string;
  telNum: number;
  companyName: string;
  companyInfo: string;
}

export const UserCard = (props: CardInfo) => {
  const {image,alt,name,address,telNum,companyName,companyInfo} = props;
  return (
    <>
      <div css={SDL}>
        <img src={image} alt={alt} />
        <p>{name}</p>
        <dl>
          <dt>mail</dt>
          <dd>{address}</dd>
        </dl>
        <dl>
          <dt>tel</dt>
          <dd>{telNum}</dd>
        </dl>
        <dl>
          <dt>{companyName}</dt>
          <dd>{companyInfo}</dd>
        </dl>
      </div>
    </>
  )
}
const SDL = css`
  max-width: 260px;
  padding: 20px 20px 0;
  border: 1px solid #5c5c5c;
  border-radius: 10px;
  text-align: left;
  img {
    width: 100%;
  }
  dl {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    text-align: left;
    gap: 20px 0 0 0;
    dt {
      width: 20%;
    }
    dd {
      margin: 0;
    }
  }
`;
