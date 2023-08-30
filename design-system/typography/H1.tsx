import { styled } from "@/styled-system/jsx";
import React from "react";

type Props = React.ComponentProps<typeof styled.h1>;

export const H1 = (props: Props) => (
  <styled.h1 fontSize="40px" fontWeight="bold" {...props} />
);
