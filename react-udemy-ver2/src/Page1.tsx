import React from 'react'
import { Routes, Route, useMatch, Link } from "react-router-dom";

export const Page1 = () => {
  const match = useMatch('/page1/*');
  const url = match?.pathnameBase || '/page1';
  return (
    <>
    <div>Page1</div>
    <Link to="/">Home</Link>
    <br />
    <Link to="/page1/detailA">DetailA</Link>
    <br />
    <Link to="/page1/detailB">DetailB</Link>
    {/* <Routes>
      {Page1Routes.map((route) => (
        <Route
          key={route.path}
          path={`${route.path}`}
          element={route.children}
        />
      ))}
    </Routes> */}
    </>
  )
}
