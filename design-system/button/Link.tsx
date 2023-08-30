import NextLink from "next/link";
import { Text } from "../typography/Text";
import { Box } from "../layout/Box";
import { Row } from "../layout/Row";
import { styled } from "@/styled-system/jsx";

type Props = React.ComponentProps<typeof NextLink>;

export const Link = ({ children, href }: Props) => (
  <Row>
    <NextLink href={href}>
      <Box
        py="2"
        px="6"
        bg="rgb(249, 249, 249)"
        alignSelf="flex-start"
        borderRadius="3xl"
        _hover={{ bg: "#FAD5B3" }}
        fontWeight="bold"
        fontSize="16px"
      >
        {children}
      </Box>
    </NextLink>
  </Row>
);
