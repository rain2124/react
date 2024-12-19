import React from 'react'
import { Routes, Route, useParams, useMatch } from "react-router-dom";
import { Home } from '../Home';
import { Page1 } from '../Page1';
import { Page2 } from '../Page2';
import { Page1DetailA } from '../Page1DetailA';
import { Page1DetailB } from '../Page1DetailB';
import { UrlParameter } from '../UrlParameter';

// lender match から useParams
const DynamicPage = () => {
  const { subpage } = useParams<{ subpage?: string }>();
  if (!subpage) {
    return <Page1 />;
  }
  switch (subpage) {
    case 'detailA':
      return <Page1DetailA />;
    case 'detailB':
      return <Page1DetailB />;
    default:
      return <h1>404 Not Found</h1>;
  }
};

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page1/:subpage" element={<DynamicPage />} />
        <Route path="page2/:id" element={<UrlParameter />} />
        {/* 下記にrender部分をv6で作る useMatch / useLocation*/}
        {/* <Route path="page1" />
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        </Route> */}
      </Routes>
    </>
  )
}



