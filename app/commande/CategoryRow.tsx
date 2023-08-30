import { Column } from "@/design-system/layout/Column";
import { H2 } from "@/design-system/typography/H2";
import { Text } from "@/design-system/typography/Text";
import { Row } from "@/design-system/layout/Row";
import Image from "next/image";
import { Link } from "@/design-system/button/Link";
import { Box } from "@/design-system/layout/Box";
import { Product } from "../api/product/types";
import { ProductCard } from "../produit/ProductCard";
import { getCategory } from "../api/categories/categories";

type Props = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

export const CategoryRow = async ({ id, title, subtitle, image }: Props) => {
  const category = await getCategory({ id });
  const products = category["Sous-categories"]
    .flatMap((sousCat) => sousCat.Produits)
    .slice(0, 12);

  return (
    <Column>
      <Row pl="4" justifyContent="space-between" alignItems="center">
        <H2>{title}</H2>
        <Box px="2">
          <Link href={`/categorie/${id}`}>Voir tout</Link>
        </Box>
      </Row>
      <Text pl="4">{subtitle}</Text>
      <Row pl="4" overflowX="auto" scrollbar="hidden">
        <Image
          alt={title}
          width={256}
          height={157}
          style={{ flexShrink: 0, width: 256, height: 157 }}
          src={image}
          priority
        />
        {products?.map((product) => (
          <ProductCard key={product.ID} product={product} />
        ))}
      </Row>
    </Column>
  );
};
