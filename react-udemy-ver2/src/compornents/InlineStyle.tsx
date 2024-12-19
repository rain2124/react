import React from 'react'

export const InlineStyle = () => {
  const containerStyle = {
    border : "solid 2px #39eff",
    borderRadius : "round",
    padding : "20px",
    maring: "8px",
    display: "flex",
    justifyContent: "space-around",
    alineItems: "center"
  };
  const titleStyle = {
    maring: "0",
    color: "#39eff"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  }
  return (
    <>
      <div style={containerStyle}>
        <p style={titleStyle}>InlineStyle</p>
        <button style={buttonStyle}>fight!!</button>
      </div>
    </>
  )
}
