import React from "react";
import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shoes"];
const page = () => {
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

export default page;
