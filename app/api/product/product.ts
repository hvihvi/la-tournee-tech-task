import { Product } from "./types";

export const getProduct = async ({ id }: { id: string }) => {
  const res = await fetch(
    `https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/products/${id}`,
    { next: { revalidate: 5 } }
  );
  const product: Product = await res.json();

  return product;
};
