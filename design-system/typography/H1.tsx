import { styled } from "@/styled-system/jsx";
import React from "react";
import { bricolage_grotesque } from "./fonts";

type Props = React.ComponentProps<typeof styled.h1>;

export const H1 = (props: Props) => (
  <styled.h1
    className={bricolage_grotesque.className}
    fontSize="40px"
    fontWeight="bold"
    {...props}
  />
);
