import { Column } from "@/design-system/layout/Column";
import { Product } from "./types";
import { H2 } from "@/design-system/typography/H2";
import { Text } from "@/design-system/typography/Text";
import { Row } from "@/design-system/layout/Row";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  products: Product[];
};

export const CategoryRow = ({ title, subtitle, image, products }: Props) => {
  return (
    <Column>
      <H2>{title}</H2>
      <Text>{subtitle}</Text>
      <Row>
        <Image alt={title} width={220} height={343} src={image} />
      </Row>
    </Column>
  );
};
