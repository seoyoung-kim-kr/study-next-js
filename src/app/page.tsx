import Image from "next/image";
import { default as Counter } from "@/components/Counter";
// app 폴더 컴포넌트들은 기본적으로 다 서버 컴포넌트
// 서버 컴포넌트에서는 state같은 브라우저에서 담당하는 기능들 사용 불가능 (서버(node)의 기능만 사용 가능)
export default function Home() {
  console.log("안녕!"); //이것도 서버에 찍힘

  return <Counter />;
}

// 클라이언트 컴포넌트는 가장 작은 단위로, 재사용 가능한 부분에만
