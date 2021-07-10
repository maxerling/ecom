import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const Config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const Theme = extendTheme({ Config });

export { Theme };
