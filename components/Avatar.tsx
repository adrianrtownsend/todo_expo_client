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
import { truncateString } from "../helpers";

interface AvatarProps {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  badge?: ReactNode;
  hideLabel?: boolean;
}

const Avatar = ({
  uid,
  email,
  displayName,
  photoURL,
  badge,
  hideLabel = false,
}: AvatarProps) => {
  const navigation = useNavigation();

  return (
    <VStack space="md">
      <Pressable
        flex={1}
        onPress={() =>
          navigation.navigate("Profile", {
            screen: "Profile",
            params: {
              userId: uid,
            },
          })
        }
      >
        <Center>
          <GSAvatar bgColor="$amber600" size="md" borderRadius="$full">
            <AvatarFallbackText>{displayName || email}</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: photoURL,
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
        {!hideLabel && (
          <Text textAlign="center">{truncateString(displayName || email)}</Text>
        )}
      </Pressable>
    </VStack>
  );
};

export default Avatar;
