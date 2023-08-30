import { styled } from "@/styled-system/jsx";
import React from "react";
import { bricolage_grotesque } from "./fonts";

type Props = React.ComponentProps<typeof styled.h2>;

export const H2 = (props: Props) => (
  <styled.h2
    className={bricolage_grotesque.className}
    fontSize="34px"
    fontWeight="bold"
    {...props}
  />
);
