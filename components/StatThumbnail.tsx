import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  HStack,
  VStack,
  Pressable,
  ButtonText,
  Button,
  Progress,
  ProgressFilledTrack,
  View,
} from "@gluestack-ui/themed";
import React from "react";

interface StatThumbnailProps {
  src: string;
  alt?: string;
}

const StatThumbnail = ({ src, alt }: StatThumbnailProps) => {
  return (
    <Box py="$1" px="$2" borderWidth={"$1"} rounded="$md" maxWidth="100%">
      <HStack justifyContent="space-between" alignItems="center" space="lg">
        <Image
          source={{
            uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
          }}
          alt="Aang flying and surrounded by clouds"
          rounded="$md"
          flex={1}
        />
        <Box justifyContent="space-between" flex={3}>
          <VStack>
            <Text>{"<Tag Badge>"}</Text>
            <Heading>{"<Stat Name>"}</Heading>
            <Text>{"<User>"}</Text>
            <Progress value={46} w={"100%"} h={8} bg="$lime100">
              <ProgressFilledTrack h={8} bg="$lime500" />
            </Progress>
            <Text size="md">{"<Value>"}</Text>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default StatThumbnail;
