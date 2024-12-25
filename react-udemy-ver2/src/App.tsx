import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom"; //router browserRouter & link
import { useState, useEffect, useCallback, useMemo } from 'react'; //Hooks関連
import { ChildArea } from './compornents/ChildArea'; //compornents import
import { InlineStyle } from './compornents/InlineStyle';
import { CssModules } from './compornents/CssModules';
import { StyledJsx } from './compornents/StyledJsx';
import { StyledComponents } from './compornents/StyledComponents';
import { Emotion } from './compornents/Emotion';
import { Router } from './router/Router'
import { FetchBlogs } from './compornents/FetchBlogs'
// import { Home } from './Home';
// import { Page1 } from './Page1';
// import { Page2 } from './Page2';
// import { Page1DetailA } from './Page1DetailA';
// import { Page1DetailB } from './Page1DetailB';
import './App.css';
import { PrimaryButton } from './compornents/atom/button/PrimaryButton';
import { SecondaryButton } from './compornents/atom/button/SecondaryButton';
import { SearchInput } from './compornents/molecules/SearchInput';
import { UserCard } from './compornents/organisms/user/UserCard';


export const App = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const onClickCountUp = () => setCount(count + 1);
  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const [blogs, setBlogs] = useState([]);
  // コンポーネントに関数を渡す場合、関数が更新されるとコンポーネントをmemoで囲ったとしても再レンダリングされるため
  // 渡す関数にcallbackを使って、空の配列を渡して[]最初に設定されたものを使用するようにする。
  const onClickClose = useCallback(() => {
    setOpen(false)
  },[]);

  // 最初の計算だけレンダリングされる
  const temp = useMemo(() => 1+3, []);
  console.log(temp);

  return (
    <div className="App">
      {/* おさらい */}
      <p>{count}</p>
      <button onClick={onClickCountUp}>countUp</button>
      <br />
      <br />
      <input value={text} onChange={onChangeEvent} />
      <button onClick={onClickOpen}>ボタン</button>
      <br />
      {/* <ChildArea open={open} onClickClose={onClickClose} /> */}
      {/* css */}
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
      {/* react router */}
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        {/* Router */}
        <Router />
      </BrowserRouter>
      {/* spabace */}
      <FetchBlogs />
      {/* atom design */}
      <PrimaryButton>primary</PrimaryButton>
      <SecondaryButton>secondary</SecondaryButton>
      <br />
      <SearchInput />

      <UserCard
        image={'https://cdn.pixabay.com/photo/2022/09/29/03/17/baby-7486419_1280.jpg'}
        alt={'画像'}
        name={'名前'}
        address={'mail@gmail.com'}
        telNum={1111}
        companyName={'dande'}
        companyInfo={'創業100年'}
      />
    </div>
  );
}




export default App;
