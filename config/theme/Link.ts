import { createStyle } from "@gluestack-style/react";

export const Link = createStyle({
  _web: {
    outlineWidth: 0,
    ":disabled": {
      cursor: "not-allowed",
    },
    ":focusVisible": {
      outlineWidth: 2,
      outlineColor: "$primary700",
      outlineStyle: "solid",
      _dark: {
        outlineColor: "$primary400",
      },
    },
  },
  _text: {
    ":hover": {
      color: "$secondary600",
      textDecorationLine: "none",
    },
    ":active": {
      color: "$secondary700",
    },
    ":disabled": {
      opacity: 0.4,
    },
    _dark: {
      ":hover": {
        color: "$secondary400",
      },
      ":active": {
        color: "$secondary300",
      },
    },
  },
});
