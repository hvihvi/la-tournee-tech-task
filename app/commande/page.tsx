import { Column } from "@/design-system/layout/Column";
import { H1 } from "@/design-system/typography/H1";
import { VisuallyHidden } from "@/styled-system/jsx";
import { CategoryRow } from "./CategoryRow";
import { getCategories } from "../api/categories";

const Commande = () => {
  const categories = getCategories();

  return (
    <main>
      <Column gap="1" pl="4">
        <VisuallyHidden>
          <H1>Commande La Tournée</H1>
        </VisuallyHidden>
        {categories.map((category) => (
          <CategoryRow
            key={category.id}
            title={category.title}
            subtitle={category.subtitle}
            image={category.image}
            products={category.products}
          />
        ))}
      </Column>
    </main>
  );
};

export default Commande;
