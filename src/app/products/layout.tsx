import Link from "next/link";
import React from "react";

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
