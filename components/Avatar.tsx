import {
  Avatar as GSAvatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Center,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import React, { ReactNode } from "react";

interface AvatarProps {
  name: string;
  firstName?: string;
  lastName?: string;
  src?: string;
  badge?: ReactNode;
}

const Avatar = ({ name, src, firstName, lastName, badge }: AvatarProps) => {
  const navigation = useNavigation();

  return (
    <VStack space="md">
      <Pressable
        flex={1}
        onPress={() =>
          navigation.navigate("Profile", {
            userId: 1,
          })
        }
      >
        <Center>
          <GSAvatar bgColor="$amber600" size="md" borderRadius="$full">
            <AvatarFallbackText>
              {name || `${firstName} ${lastName}`}
            </AvatarFallbackText>
            <AvatarImage
              source={{
                uri: src,
              }}
            />
            <AvatarBadge
              sx={{
                _dark: {
                  borderColor: "$black",
                },
              }}
            />
          </GSAvatar>
        </Center>
        <Text textAlign="center">
          {name || `${firstName} ${lastName ? lastName.slice(0, 1) : ""}`}
        </Text>
      </Pressable>
    </VStack>
  );
};

export default Avatar;
