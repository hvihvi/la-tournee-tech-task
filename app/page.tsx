import { Link } from "@/design-system/button/Link";
import { Column } from "@/design-system/layout/Column";
import { H1 } from "@/design-system/typography/H1";
import { H2 } from "@/design-system/typography/H2";
import { Text } from "@/design-system/typography/Text";

const Home = () => (
  <main>
    <Column p="4">
      <H1>Bienvenue sur La Tournée !</H1>
      <H2>La home est vide 😅</H2>
      <Link href="/commande">Passer commande →</Link>
    </Column>
  </main>
);

export default Home;
