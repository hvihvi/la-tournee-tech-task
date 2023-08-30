import Link from "next/link";
import { Product } from "../api/product/types";
import { Column } from "@/design-system/layout/Column";
import Image from "next/image";
import { Center } from "@/styled-system/jsx";
import { Strong } from "@/design-system/typography/Strong";
import { Caption } from "@/design-system/typography/Caption";
import { useMemo } from "react";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const productName = product["Nom du produit"];

  const truncatedProductName = useMemo(
    () =>
      productName.length > 90
        ? productName.substring(0, 90) + "…"
        : productName,
    [productName]
  );

  return (
    <Link href={`/produit/${product.ID}`}>
      <Column alignItems="flex-start" maxWidth={225}>
        <Center
          borderRadius="xl"
          backgroundColor="rgb(244,239,233)"
          height={148}
          width={225}
        >
          <Image
            alt={product["Nom du produit"]}
            width={148}
            height={225}
            src={product.Image}
          />
        </Center>
        <Column gap={0} alignItems="flex-start">
          <Strong>{truncatedProductName}</Strong>
          <Caption>{product.Marque}</Caption>
        </Column>
      </Column>
    </Link>
  );
};
