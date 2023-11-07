import { createStyle } from "@gluestack-style/react";

export const LinkText = createStyle({
  textDecorationLine: "underline",
  color: "$secondary700",
  _dark: {
    color: "$secondary300",
  },
});
