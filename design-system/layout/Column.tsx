import { Stack } from "@/styled-system/jsx";
import React from "react";

type Props = React.ComponentProps<typeof Stack>;

export const Column = (props: Props) => <Stack flexDir="column" {...props} />;
