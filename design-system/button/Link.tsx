import NextLink from "next/link";
import { Text } from "../typography/Text";

type Props = React.ComponentProps<typeof NextLink>;

export const Link = ({ children, href }: Props) => (
  <NextLink href={href}>
    <Text fontWeight="bold" color="blue.500">
      {children}
    </Text>
  </NextLink>
);
