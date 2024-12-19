import React from 'react'
import { Link } from "react-router-dom";

export const Page1DetailB = () => {
  return (
    <>
    <div>Page1DetailB</div>
    <Link to="/page1/">page1</Link>
    <br />
    <Link to="/page1/detailA">DetailA</Link>
    </>
  )
}
