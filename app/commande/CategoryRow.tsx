import { Column } from "@/design-system/layout/Column";
import { Product } from "./types";
import { H2 } from "@/design-system/typography/H2";
import { Text } from "@/design-system/typography/Text";
import { Row } from "@/design-system/layout/Row";
import Image from "next/image";
import { Link } from "@/design-system/button/Link";
import { Box } from "@/design-system/layout/Box";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  products: Product[];
};

export const CategoryRow = ({ title, subtitle, image, products }: Props) => {
  return (
    <Column>
      <Row justifyContent="space-between" alignItems="center">
        <H2>{title}</H2>
        <Box px="2">
          <Link href="/">Voir tout</Link>
        </Box>
      </Row>
      <Text>{subtitle}</Text>
      <Row>
        <Image alt={title} width={220} height={343} src={image} />
      </Row>
    </Column>
  );
};