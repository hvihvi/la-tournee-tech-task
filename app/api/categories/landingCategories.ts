import { getCategories } from "./categories";
import { LandingCategories } from "./types";

export const getLandingCategories = async () => {
  const res = await fetch(
    "https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/categories/landing",
    { next: { revalidate: 5 } }
  );

  const landingCategories: LandingCategories = await res.json();

  const names =
    landingCategories?.["Sous-categories"].map((cat) => cat.Nom) ?? [];
  const categories = await getCategories();

  // hack: we filter categories by name, ID, Description and Image are missing from /categories/landing
  return categories.filter((cat) => names.includes(cat.Nom));
};
