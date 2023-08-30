import { getCategory } from "@/app/api/categories/categories";
import { Link } from "@/design-system/button/Link";
import { Column } from "@/design-system/layout/Column";
import { Row } from "@/design-system/layout/Row";
import { H1 } from "@/design-system/typography/H1";
import { H2 } from "@/design-system/typography/H2";
import { Text } from "@/design-system/typography/Text";

type Props = { params: { id: string } };

const Categorie = async ({ params: { id } }: Props) => {
  const category = await getCategory({ id });
  console.log(category);
  return (
    <Column pl="4" py="4">
      <H1>{category.Nom}</H1>
      {category?.["Sous-categories"].map((sousCat) => (
        <Column key={sousCat.ID}>
          <H2>{sousCat?.Nom}</H2>
          <Row overflow="hidden">
            {sousCat.Produits.map((produit) => (
              <Link href={`/produit/${produit.ID}`} key={produit.ID}>
                {produit["Nom du produit"]}
              </Link>
            ))}
          </Row>
        </Column>
      ))}
    </Column>
  );
};

export default Categorie;
