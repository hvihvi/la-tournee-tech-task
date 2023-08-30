import { Box } from "@/design-system/layout/Box";
import { Column } from "@/design-system/layout/Column";
import { H1 } from "@/design-system/typography/H1";
import { H2 } from "@/design-system/typography/H2";
import { Text } from "@/design-system/typography/Text";
import { VisuallyHidden } from "@/styled-system/jsx";

export default function Home() {
  return (
    <main>
      <Column gap="1">
        <VisuallyHidden>
          <H1>Commande La Tournée</H1>
        </VisuallyHidden>
        <H2>Producteurs locaux</H2>
        <Text>
          Découvrez nos producteurs locaux, dénichés rien que pour vous !
        </Text>
        <H2>Produits bio</H2>
        <Text>
          Une sélection de + de 150 produits bio, parmi des boissons, de
          l&apos;épicerie, du frais, des produits d&apos;hygiène...
        </Text>
      </Column>
    </main>
  );
}
