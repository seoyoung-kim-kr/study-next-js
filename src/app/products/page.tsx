import React from "react";
import Link from "next/link";
import { getProducts } from "@/service/products";

// export const revalidate = 3;

const ProductsPage = async () => {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com", {
    // 3초 뒤에 데이터 또 가져와 줘 : 자동 ISR
    // 0으로 하면 요청할 때 마다 렌더링 됨 (SSR)
    // cacte : "no-store"도 동일
    next: { revalidate: 3 },
  });
  const data = await res.json();
  const factText = data.data[0];

  return (
    <div>
      product 페이지
      <ul>
        {products.map(({ id, name }, idx) => (
          <li key={idx}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className="text-sm bg-green-700 text-white">{factText}</article>
    </div>
  );
};

export default ProductsPage;
