import React from "react";
import Link from "next/link";
import { getProducts } from "@/service/products";

const ProductsPage = () => {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = getProducts();

  return (
    <div>
      product 페이지
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
