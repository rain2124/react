import React from 'react'
import { memo } from 'react'

const style = {
  width: "100%",
  height: "200px",
  background: "khaki"
}

type TProps = {
  open: boolean,
  onClickClose: () => void
}
// リアクトの特性として、親要素がレンダリングされた場合子要素も全てレンダリングされるため、memoで囲むことで不要な再レンダリングを防ぐ
export const ChildArea = memo((props: TProps) => {
  const { open, onClickClose } = props;
  const data: number[] = [...Array(2000).keys()];
  console.log(data);
  console.log("レンダリングされた");
  return (
    <>
      {open ? (
        <>
          <div style={style}>ChildArea open</div>
          <button onClick={onClickClose}>閉じる</button>
        </>
      ) : (
        null
      )}
    </>
  )
});

export default ChildArea