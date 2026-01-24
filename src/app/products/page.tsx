import React from "react";
import Link from "next/link";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";
import clothesImage from "../../../public/images/clothes.jpg";
import Image from "next/image";

// export const revalidate = 3;

const ProductsPage = async () => {
  // // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();
  return (
    <div>
      product 페이지
      <Image src={clothesImage} alt="옷" />
      <ul>
        {products.map(({ id, name }, idx) => (
          <li key={idx}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </div>
  );
};

export default ProductsPage;
