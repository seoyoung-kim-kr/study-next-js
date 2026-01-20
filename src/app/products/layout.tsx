import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매합니다",
  icons: {
    icon: "/favicon.ico",
  },
};

const ProductLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <nav>
        <Link href="#">여성옷</Link>
        <Link href="#">남성옷</Link>
      </nav>
      <section>{children}</section>
    </>
  );
};

export default ProductLayout;
