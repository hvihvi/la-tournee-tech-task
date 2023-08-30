import { styled } from "@/styled-system/jsx";
import React from "react";
import { bricolage_grotesque } from "./fonts";

type Props = React.ComponentProps<typeof styled.strong>;

export const Strong = (props: Props) => (
  <styled.strong
    className={bricolage_grotesque.className}
    fontSize="16px"
    fontWeight="bold"
    {...props}
  />
);
