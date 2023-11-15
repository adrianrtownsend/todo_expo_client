import { Box, ScrollView, VStack, Text } from "@gluestack-ui/themed";

import React from "react";
import ItemThumbnail from "./ItemThumbnail";

const ScrollItemList = ({ items }) => {
  const ScrollItem = (item) => {
    return (
      <VStack>
        <ItemThumbnail {...item} />
      </VStack>
    );
  };

  return (
    <ScrollView flex={1}>
      {items?.map((i, index: number) => {
        return <ScrollItem {...i} key={index} />;
      })}
    </ScrollView>
  );
};

export default ScrollItemList;
