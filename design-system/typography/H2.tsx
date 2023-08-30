import { styled } from "@/styled-system/jsx";
import React from "react";

type Props = React.ComponentProps<typeof styled.h2>;

export const H2 = (props: Props) => (
  <styled.h2 fontSize="34px" fontWeight="bold" {...props} />
);
