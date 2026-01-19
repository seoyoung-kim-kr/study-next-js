import React from "react";

const ProductLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <nav>
        <a href="#">여성옷</a>
        <a href="#">남성옷</a>
      </nav>
      <section>{children}</section>
    </>
  );
};

export default ProductLayout;
