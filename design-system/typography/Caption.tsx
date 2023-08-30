import { styled } from "@/styled-system/jsx";
import React from "react";
import { lato } from "./fonts";

type Props = React.ComponentProps<typeof styled.p>;

export const Caption = (props: Props) => (
  <styled.p
    className={lato.className}
    fontSize="14px"
    fontWeight="400"
    color="rgba(0,0,0,0.6)"
    {...props}
  />
);
