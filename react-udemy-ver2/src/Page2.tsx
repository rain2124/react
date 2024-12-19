import React from 'react'
import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <>
    <div>Page2</div>
    <Link to="/">Home</Link>
    <br />
    <Link to="/page2/100"> url paramerter </Link>
    <br />
    <Link to="/page2/100?search=react&name=2"> query paramerter </Link>
    {/* <Routes>
      {Page2Routes.map((route) => (
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
