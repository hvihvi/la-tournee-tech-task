import { Column } from "@/design-system/layout/Column";
import { Row } from "@/design-system/layout/Row";
import { H1 } from "@/design-system/typography/H1";
import { H2 } from "@/design-system/typography/H2";
import { Text } from "@/design-system/typography/Text";
import { VisuallyHidden } from "@/styled-system/jsx";
import Image from "next/image";

const Commande = () => (
  <main>
    <Column gap="1" pl="4">
      <VisuallyHidden>
        <H1>Commande La Tournée</H1>
      </VisuallyHidden>
      <H2>Producteurs locaux</H2>
      <Text>
        Découvrez nos producteurs locaux, dénichés rien que pour vous !
      </Text>
      <Row>
        <Image
          alt="Local"
          width={220}
          height={343}
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F19c85d5a6894b437e6911cccc712fe68.cdn.bubble.io%2Ff1684512549634x809100612707152000%2FGroup%25202256-min.png?w=256&amp;h=399&amp;auto=compress&amp;dpr=1&amp;fit=max"
        />
      </Row>
      <H2>Produits bio</H2>
      <Text>
        Une sélection de + de 150 produits bio, parmi des boissons, de
        l&apos;épicerie, du frais, des produits d&apos;hygiène...
      </Text>
      <Row>
        <Image
          alt="Bio"
          width={220}
          height={343}
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F19c85d5a6894b437e6911cccc712fe68.cdn.bubble.io%2Ff1684512539559x565418437305486460%2FGroup%25202257-min.png?w=256&h=399&auto=compress&dpr=1&fit=max"
        />
      </Row>
    </Column>
  </main>
);

export default Commande;
