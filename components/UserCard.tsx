import { VStack, HStack, Text, Heading } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { PenSquare } from "lucide-react-native";
import { Pressable } from "react-native";

import Avatar from "./Avatar";

interface UserCardProps {
  displayName?: string;
  email?: string;
  userId: string;
}

const UserCardAction = () => {
  const navigation = useNavigation();
  return (
    <HStack alignItems="center">
      <Pressable onPress={() => navigation.navigate("Settings")}>
        <PenSquare />
      </Pressable>
    </HStack>
  );
};

const UserCard = ({ displayName, email, userId }: UserCardProps) => {
  const navigation = useNavigation();
  return (
    <HStack justifyContent="space-between">
      <HStack gap="$3">
        <Avatar name={displayName || ""} hideLabel />
        <VStack>
          <Pressable
            flex={1}
            onPress={() =>
              navigation.navigate("Profile", {
                screen: "Profile",
                params: {
                  userId,
                },
              })
            }
          >
            {displayName && <Heading>{displayName}</Heading>}
            {email && <Text>{email}</Text>}
          </Pressable>
        </VStack>
      </HStack>
      <UserCardAction />
    </HStack>
  );
};

export default UserCard;
