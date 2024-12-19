import React from 'react'
import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const location = useLocation();
  // URLSearchParamsを使ってクエリパラメータを取得
  const query = new URLSearchParams(location.search);
  // クエリパラメータを取得
  const searchJudge = () => {
    const searchTerm = query.get('search') || ''; // 'search' というパラメータの値を取得
    if (searchTerm) {
      return `Search term: ${searchTerm}`;
    } else {
      return `Search term: パラメーターはありません`;
    }
  };
  const nameJudge = () => {
    const name = query.get('name'); // 'page' というパラメータの値を取得、デフォルトは '1'
    if (name) {
      return `name: ${name}`;
    } else {
      return `name: パラメーターはありません`;
    }
  };
  return (
    <>
    <div>UrlParameter</div>
    <p>パラメーターは{ id }です</p>
    {searchJudge()}
    <br />
    {nameJudge()}
    </>
  )
}
