import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
    <div>Homeページ</div>
    <Link to="/page1">page1</Link>
    <br />
    <Link to="/page2">page2</Link>
    <br />
    </>
  )
}
