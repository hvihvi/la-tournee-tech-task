import { Stack } from "@/styled-system/jsx";
import React from "react";

type Props = React.ComponentProps<typeof Stack>;

export const Row = (props: Props) => <Stack flexDir="row" {...props} />;
