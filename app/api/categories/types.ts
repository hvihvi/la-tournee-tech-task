import { type } from "os";
import { Product } from "../product/types";

export type Category = {
  ID: string;
  Nom: string;
  Couleur: string;
  Description: string;
  "Sous-categories": SousCategorie[];
  Produits: Product[];
  Image: string;
};

export type SousCategorie = {
  ID: string;
  Nom: string;
  Description: string;
  Produits: Product[];
  Image: string;
};

export type LandingCategories = {
  ID: string;
  Nom: string;
  Description: string;
  "Sous-categories": Category[];
  Image: string;
};
