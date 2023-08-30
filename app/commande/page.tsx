import { Column } from "@/design-system/layout/Column";
import { H1 } from "@/design-system/typography/H1";
import { VisuallyHidden } from "@/styled-system/jsx";
import { CategoryRow } from "./CategoryRow";
import { getLandingCategories } from "../api/categories/landingCategories";

const Commande = async () => {
  const categories = await getLandingCategories();

  return (
    <main>
      <Column gap="1" pl="4">
        <VisuallyHidden>
          <H1>Commande La Tournée</H1>
        </VisuallyHidden>
        {categories.map((category) => (
          <CategoryRow
            key={category.ID}
            id={category.ID}
            title={category.Nom}
            subtitle={category.Description}
            image={category.Image}
            products={category.Produits}
          />
        ))}
      </Column>
    </main>
  );
};

export default Commande;
