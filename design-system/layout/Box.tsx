import { Box as PandaBox } from "@/styled-system/jsx";
import React from "react";

type Props = React.ComponentProps<typeof PandaBox>;

export const Box = (props: Props) => <PandaBox {...props} />;
