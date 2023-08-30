import { getProduct } from "@/app/api/product/product";
import { Column } from "@/design-system/layout/Column";
import { ProductCard } from "../ProductCard";
import { H1 } from "@/design-system/typography/H1";

type Props = { params: { id: string } };

const Produit = async ({ params: { id } }: Props) => {
  const product = await getProduct({ id });
  return (
    <Column p="4">
      <H1>{product["Nom du produit"]}</H1>
      <ProductCard product={product} />
    </Column>
  );
};

export default Produit;
