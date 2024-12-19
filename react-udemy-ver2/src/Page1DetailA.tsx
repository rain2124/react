import React from 'react'
import { Link } from "react-router-dom";

export const Page1DetailA = () => {
  return (
    <>
    <div>Page1DetailA</div>
    <Link to="/page1/">page1</Link>
    <br />
    <Link to="/page1/detailB">DetailB</Link>
    </>
  )
}
