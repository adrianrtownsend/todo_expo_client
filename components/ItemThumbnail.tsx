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
}: ItemThumbnailProps) => {
  const ImageContainer = () => {
    return (
      <>
        {/** Image Container */}
        <Image
          source={{
            uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
          }}
          alt="Aang flying and surrounded by clouds"
          rounded="$md"
          flex={1}
        />
        {/** Complete Button - position absolute*/}
        <Complete />
      </>
    );
  };

  /** Text Container */
  const TextContainer = () => {
    return (
      <Pressable>
        <VStack>
          {/** Title */}
          <Text>{title}</Text>
          {/** Tags */}
          <HStack space="md">
            {tags?.map((tag) => {
              return <Text>{tag}</Text>;
            })}
          </HStack>
        </VStack>
      </Pressable>
    );
  };

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
      <Pressable w="100%">
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
      <Pressable
        position="absolute"
        top={12}
        right={16}
        h="$6"
        w="$6"
        justifyContent="center"
        alignItems="center"
      >
        <AnimatePresence>
          <Motion.View
            initial={{
              scale: 1.3,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0.9,
            }}
            transition={{
              type: "spring",
              mass: 0.9,
              damping: 9,
              stiffness: 300,
            }}
            style={{
              position: "absolute",
            }}
          >
            <Icon
              as={Heart}
              size="lg"
              color={
                /** likes.includes(image.title) === */ true ? "red" : "white"
              }
              fill={
                /** likes.includes(image.title) === */ true ? "red" : "gray"
              }
            />
          </Motion.View>
        </AnimatePresence>
      </Pressable>
      <HStack justifyContent="space-between" py="$2" alignItems="flex-start">
        <VStack space="$sm" flex={1}>
          <Text
            fontWeight="$semibold"
            color="$textLight900"
            sx={{
              _dark: { color: "$textDark200" },
            }}
          >
            {"<image.title>"}
          </Text>
          <Text
            size="sm"
            color="$textLight500"
            sx={{
              _dark: { color: "$textDark500" },
            }}
          >
            {"<image.location>"}
          </Text>
          <HStack>
            <Text
              size="sm"
              fontWeight="$semibold"
              color="$textLight900"
              sx={{
                _dark: { color: "$textDark200" },
              }}
            >
              {"<image.price>"}
            </Text>
            <Text
              size="sm"
              pl="$1"
              color="$textLight900"
              sx={{
                _dark: { color: "$textDark200" },
              }}
            >
              night
            </Text>
          </HStack>
        </VStack>
        <Tooltip
          trigger={(triggerProps: any) => {
            return (
              <Pressable {...triggerProps}>
                <HStack alignItems="center" justifyContent="flex-start">
                  <Icon
                    as={Star}
                    size={12}
                    fill="currentColor"
                    sx={{
                      _dark: { color: "$backgroundDark50" },
                      _light: { color: "black" },
                    }}
                  />
                  <Text
                    pl="$1"
                    size="sm"
                    sx={{
                      _light: { color: "$textLight900" },
                      _dark: { color: "$textDark200" },
                    }}
                  >
                    {"<image.rating>"}
                  </Text>
                </HStack>
              </Pressable>
            );
          }}
        >
          <Tooltip.Content>
            <Text
              sx={{
                color: "$white",
                px: "$2",
                py: "$1",
              }}
            >
              Ratings
            </Text>
          </Tooltip.Content>
        </Tooltip>
      </HStack>
    </Box>
  );
};

export default ItemThumbnail;
