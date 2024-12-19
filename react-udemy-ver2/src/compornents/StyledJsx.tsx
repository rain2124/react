import React from 'react'

export const StyledJsx = () => {
  return (
    <>
    <div>
      <p>StyledJsx</p>
      <button>button</button>
    </div>
    {/* next.jsならこれかも。 react typescriptならmoduleがベター */}
    {/* <style jsx="true">{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f8f9fa;
          color: #333;
        }
        h1 {
          color: #0070f3;
          font-size: 2rem;
        }
      `}</style> */}
    </>
  )
}
