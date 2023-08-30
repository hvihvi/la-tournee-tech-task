import { styled } from "@/styled-system/jsx";
import React from "react";

type Props = React.ComponentProps<typeof styled.p>;

export const Text = (props: Props) => <styled.p fontSize="18px" {...props} />;
