import { styled } from "@/styled-system/jsx";
import React from "react";
import { lato } from "./fonts";

type Props = React.ComponentProps<typeof styled.p>;

export const Text = (props: Props) => (
  <styled.p className={lato.className} fontSize="18px" {...props} />
);
