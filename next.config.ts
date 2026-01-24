import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Page가 삭제되거나 이동한 경우, 다른 페이지로 이동켜줘야 하는 경우 페이지 이동하는 것: Redirect
  async redirects() {
    return [
      {
        source: "/products/deleted_forever", //삭제된 페이지 접속할 경우
        destination: "/products", //여기로 이동
        permanent: true, //삭제된 페이지는 영원히 옮겨갔단다 (browser => 308전달 => 이동한 페이지를 캐싱)
      },
      {
        source: "/products/deleted_forever_temp", //삭제된 페이지 접속할 경우
        destination: "/products", //여기로 이동
        permanent: false, //일시적으로 페이지 이동한 경우
      },
    ];
  },
};

export default nextConfig;
