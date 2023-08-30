import { getCategory } from "@/app/api/categories/categories";
import { Column } from "@/design-system/layout/Column";
import { H1 } from "@/design-system/typography/H1";
import { SousCategorie } from "./SousCategorie";

type Props = { params: { id: string } };

const Categorie = async ({ params: { id } }: Props) => {
  const category = await getCategory({ id });
  console.log(category);
  return (
    <Column py="4" gap="8">
      <H1 pl="4">{category.Nom}</H1>
      {category?.["Sous-categories"].map((sousCat) => (
        <SousCategorie key={sousCat.ID} sousCategorie={sousCat} />
      ))}
    </Column>
  );
};

export default Categorie;
