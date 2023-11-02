import {
  Box,
  Center,
  Heading,
  Image,
  Icon,
  Text,
  HStack,
  VStack,
  Pressable,
  ButtonText,
  Button,
  Progress,
  ProgressFilledTrack,
  Tooltip,
  View,
} from "@gluestack-ui/themed";
import React from "react";
import { ChevronRight, Heart, Star } from "lucide-react-native";
import { AnimatePresence, Motion } from "@legendapp/motion";
import Complete from "./Complete";

interface ItemThumbnailProps {
  src: string;
  title: string;
  isCompleted: boolean;
  tags?: string[];
  created_date: Date;
  navigation: any;
}

{
  /**
   [] create wrapper
   [] create image container
   [] create text container
  */
}

const ItemThumbnail = ({
  src,
  title,
  isCompleted,
  tags,
  created_date,
  navigation,
}: ItemThumbnailProps) => {
  return (
    <Box
      flex={1}
      my="$2"
      sx={{
        "@lg": {
          my: "$0",
        },
      }}
    >
      <Pressable
        w="100%"
        onPress={() =>
          navigation.navigate("Todo", {
            todoId: 1,
          })
        }
      >
        {(props: any) => {
          return (
            <>
              <Box overflow="hidden" borderRadius="$md" h="$72">
                <Image
                  source={{
                    uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
                  }}
                  h="$72"
                  w="100%"
                  transform={[{ scale: props.hovered ? 1.04 : 1 }]}
                  opacity={props.hovered ? 0.9 : 1}
                  alt="Explore"
                />
              </Box>
              {props.hovered && (
                <Box
                  position="absolute"
                  bg="$backgroundDark950"
                  opacity={0.3}
                  w="100%"
                  h="100%"
                />
              )}
              <Button
                action="secondary"
                variant="outline"
                position="absolute"
                top="45%"
                bg="transparent"
                borderColor="white"
                alignSelf="center"
                zIndex={5}
                display={props.hovered ? "flex" : "none"}
              >
                <Button.Text color="white">Explore</Button.Text>
                <Button.Icon as={ChevronRight} color="white" />
              </Button>
            </>
          );
        }}
      </Pressable>
      <Complete />
      <HStack justifyContent="space-between" py="$2" alignItems="flex-start">
        <VStack space="$sm" flex={1}>
          <Text fontWeight="$semibold">{"<image.title>"}</Text>
          <Text size="sm">{"<image.location>"}</Text>
          <HStack>
            <Text size="sm">{"<image.price>"}</Text>
            <Text size="sm">night</Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ItemThumbnail;
