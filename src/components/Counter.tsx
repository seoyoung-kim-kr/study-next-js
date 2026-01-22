"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("나는 클라이언트");
  // 처음 받아오는 정적인 페이지에 count값, button 같은 정적인 요소는 html로 만들어 서버에서 보내주지만 클릭 함수 같은건 동작 안 함
  // (이후 React 컴포넌트로 하이드레이션 하는 절차 지난 후 동작 함)
  return (
    <>
      <p>Counter : {count}</p>
      <button onClick={() => setCount((num) => num + 1)}>Click</button>
    </>
  );
};

export default Counter;
