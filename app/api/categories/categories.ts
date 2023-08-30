import { Category } from "./types";

export const getCategories = async () => {
  const res = await fetch(
    "https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/categories",
    { next: { revalidate: 5 } }
  );
  const categories: Category[] = await res.json();

  return categories;
};

export const getCategory = async ({ id }: { id: string }) => {
  const res = await fetch(
    `https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/categories/${id}`,
    { next: { revalidate: 5 } }
  );
  const category: Category = await res.json();

  return category;
};
