import { extendTheme, ThemeConfig } from "@chakra-ui/react";


const LightConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const TextStyle = {
  textStyles: {
    mono : {
      fontFamily: "Roboto Mono, monospace",
}
  }
}




const Theme = extendTheme(TextStyle, LightConfig);

export { Theme };
