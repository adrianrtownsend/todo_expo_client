import {
  Avatar as GSAvatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Center,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import React, { ReactNode } from "react";

interface AvatarProps {
  name: string;
  firstName?: string;
  lastName?: string;
  src?: string;
  badge?: ReactNode;
}

const Avatar = ({ name, src, firstName, lastName, badge }: AvatarProps) => {
  return (
    <VStack space="md">
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
    </VStack>
  );
};

export default Avatar;
