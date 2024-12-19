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

  // const blogs = async() => {
  //   return await FetchBlogs();
  // }
  // console.log(blogs);
  console.log(blogs);
  useEffect(() => {
    const fetchBlogs = async() => {
      const data = await FetchBlogs();
      // setBlogs(data);
    }
    fetchBlogs();
  }, [])

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
      {/* <FetchBlogs /> */}
    </div>
  );
}




export default App;
