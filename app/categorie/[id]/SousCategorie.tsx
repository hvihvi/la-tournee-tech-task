import { SousCategorie as SousCategorieType } from "@/app/api/categories/types";
import { ProductCard } from "@/app/produit/ProductCard";
import { Column } from "@/design-system/layout/Column";
import { Row } from "@/design-system/layout/Row";
import { H2 } from "@/design-system/typography/H2";

type Props = {
  sousCategorie: SousCategorieType;
};

export const SousCategorie = ({ sousCategorie }: Props) => {
  return (
    <Column key={sousCategorie.ID}>
      <H2 pl="4">{sousCategorie?.Nom}</H2>
      <Row pl="4" overflowX="auto" scrollbar="hidden">
        {sousCategorie.Produits.map((product) => (
          <ProductCard key={product.ID} product={product} />
        ))}
      </Row>
    </Column>
  );
};
