import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

// Promise return, 그 Promise가 리턴해주는 타입은 Product 배열
export async function getProducts(): Promise<Product[]> {
  // cwd: 현재 경로, "data" 최상위 data 폴더 내부 products.json파일
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

// Promise return, Promise 기다린 후 Product 반환 없다면 undefined 반환.
// 파일레벨에서는 arrow function 말고 function을 많이 사용함 (arrow function은 가벼운 ui 컴포넌트 등에 사용)
export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
