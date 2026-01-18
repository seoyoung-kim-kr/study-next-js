import React from "react";

// slug : 내가 설정한 동적 라우터 이름
// 13+ 버전에서는 App Router의 동적 라우트 params가 비동기 처리되어야 함
// - params가 Promise로 반환됨
// async, await로 비동기 처리
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const PantsPage = async ({ params }: Props) => {
  const { slug } = await params;
  console.log(slug);
  return <div>{slug}제품설명페이지</div>;
};

export default PantsPage;

// 함수명은 nextjs에서 정해준 규격 사항임
// 미리 페이지 만듦 (빌드시)
export const generateStaticParams = () => {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
};
