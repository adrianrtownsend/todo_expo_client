import React, { useRef, useState } from "react";
import {
  Box,
  HStack,
  Image,
  Center,
  Icon,
  Pressable,
  Heading,
  Text,
  Link,
  LinkText,
  Button,
} from "@gluestack-ui/themed";
import { ScrollView } from "react-native";
import ItemThumbnail from "./ItemThumbnail";
import Avatar from "./Avatar";
import StatThumbnail from "./StatThumbnail";

const carouselItem = (item: any, type: string, index?: number) => {
  switch (type) {
    case "item":
      return <ItemThumbnail {...item} />;
    case "avatar":
      return <Avatar {...item} />;
    case "stat":
      return <StatThumbnail {...item} />;
    default:
      return <></>;
  }
};

interface CarouselProps {
  data?: any[] | null;
  header?: string;
  subHeader?: string;
  link?: string;
  linkLabel?: string;
  type?: string;
  navigation?: any;
}

const Carousel = ({
  data = null,
  header,
  subHeader,
  link,
  linkLabel,
  type = "default",
  navigation,
}: CarouselProps) => {
  const scrollViewRef = useRef(null);
  const scrollAmount = 400;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isContentAtRight, setIsContentAtRight] = useState(true);

  const handleScrollLeft = () => {
    const newScrollPosition = scrollPosition - scrollAmount;
    if (scrollViewRef.current) {
      // @ts-ignore
      scrollViewRef?.current?.scrollTo({
        x: newScrollPosition,
        animated: true,
      });
      setScrollPosition(newScrollPosition);
    }
  };

  const handleScrollRight = () => {
    const newScrollPosition = scrollPosition + scrollAmount;
    if (scrollViewRef.current)
      // @ts-ignore
      scrollViewRef?.current?.scrollTo({
        x: newScrollPosition,
        animated: true,
      });
    setScrollPosition(newScrollPosition);
  };

  const checkContentAtLeft = () => {
    if (scrollPosition > 0) {
      return true;
    }
    return false;
  };

  const isCloseToRight = (event: any) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isScrollAtEnd =
      contentOffset.x + layoutMeasurement.width >= contentSize.width;
    if (isScrollAtEnd) {
      return true;
    }
    return false;
  };

  return (
    <Box w="100%" my="$2">
      <HStack
        justifyContent="space-between"
        alignItems="flex-start"
        width="100%"
        space={"xl"}
      >
        {header && <Heading>{header}</Heading>}
        {link && (
          <Pressable onChange={() => navigation.navigate(link)}><Text>{linkLabel || 'View All'}</Text></Pressable>
        )}
      </HStack>
      <ScrollView
        horizontal
        style={{ width: "100%" }}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        scrollEventThrottle={50}
        onScroll={(event) => {
          if (isCloseToRight(event)) {
            setIsContentAtRight(false);
          } else {
            setIsContentAtRight(true);
          }
          setScrollPosition(event.nativeEvent.contentOffset.x);
        }}
      >
        <HStack space="md" width="100%" px="$4" sx={{ "@md": { px: "$0" } }}>
          {data &&
            data.map((item, index: number) => {
              return (
                <Box key={index} flex={1}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("");
                    }}
                  >
                    {carouselItem(item, type, index)}
                    {}
                  </Pressable>
                </Box>
              );
            })}
        </HStack>
      </ScrollView>
      <ScrollLeft
        handleScrollLeft={handleScrollLeft}
        disabled={!checkContentAtLeft()}
      />
      <ScrollRight
        handleScrollRight={handleScrollRight}
        disabled={!isContentAtRight}
      />
    </Box>
  );
};

const ScrollLeft = ({ handleScrollLeft, disabled }: any) => {
  return (
    <Center
      position="absolute"
      left="$0"
      h="100%"
      display="none"
      sx={{
        "@md": {
          display: "flex",
        },
      }}
    >
      <Pressable
        p="$1"
        ml="$3"
        borderRadius="$full"
        borderColor="$borderLight300"
        borderWidth="$1"
        bg="$backgroundLight50"
        sx={{
          "@md": {
            ml: -16,
          },
          ":hover": {
            bg: "$backgroundLight100",
          },
          _dark: {
            bg: "$backgroundDark900",
            borderColor: "$borderDark600",
            ":hover": {
              bg: "$backgroundDark800",
            },
          },
          opacity: disabled ? 0 : 1,
          // _web: {
          //   cursor: "not-allowed",
          // },
        }}
        disabled={disabled}
        onPress={handleScrollLeft}
      ></Pressable>
    </Center>
  );
};

const ScrollRight = ({ handleScrollRight, disabled }: any) => {
  return (
    <Center
      position="absolute"
      right="$0"
      h="100%"
      display="none"
      sx={{
        "@md": {
          display: "flex",
        },
      }}
    >
      <Pressable
        p="$1"
        mr="$3"
        borderRadius="$md"
        borderColor="$borderLight300"
        borderWidth="$1"
        bg="$backgroundLight50"
        sx={{
          "@md": {
            mr: "$4",
          },
          ":hover": {
            bg: "$backgroundLight100",
          },
          _dark: {
            bg: "$backgroundDark900",
            borderColor: "$borderDark600",
            ":hover": {
              bg: "$backgroundDark800",
            },
          },
          opacity: disabled ? 0 : 1,
        }}
        onPress={handleScrollRight}
        disabled={disabled}
      ></Pressable>
    </Center>
  );
};

export default Carousel;
