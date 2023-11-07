import React from "react";
import {
  Box,
  Center,
  FlatList,
  Pressable,
  VStack,
  HStack,
  Text,
} from "@gluestack-ui/themed";
import { ChevronRightIcon, Home, Star } from "lucide-react-native";

const MenuList = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <Pressable
          key={item.id}
          onPress={item.action}
          borderBottomWidth="$1"
          borderColor="$trueGray800"
          sx={{
            _dark: {
              borderColor: "$trueGray100",
            },
            "@base": {
              pl: 0,
              pr: 0,
            },
            "@sm": {
              pl: "$4",
              pr: "$5",
            },
          }}
          py="$2"
        >
          <HStack space="md" justifyContent="space-between" alignItems="center">
            <HStack space="md">
              <Home />
              <VStack>
                <Text
                  color="$coolGray800"
                  fontWeight="$bold"
                  sx={{
                    _dark: {
                      color: "$warmGray100",
                    },
                  }}
                >
                  {item.name}
                </Text>
              </VStack>
            </HStack>
            <ChevronRightIcon />
          </HStack>
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MenuList;
