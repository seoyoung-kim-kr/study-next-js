import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";

export const revalidate = 3;

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
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <div>
      {product.name} 제품 설명페이지
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={200}
        height={200}
      />
    </div>
  );
};

export default PantsPage;

export async function generateMetadata({ params }: Props) {
  // 모든 제품의 페이즈들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const { slug } = await params;
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
