import {
  Box,
  Center,
  FlatList,
  VStack,
  HStack,
  Text,
  Heading,
} from "@gluestack-ui/themed";
import Avatar from "./Avatar";
import { PenSquare } from "lucide-react-native";
import ScrollItemList from "./ScrollItemList";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../graphql";
import Loading from "./Loading";

interface UserCardProps {
  displayName?: string;
  email?: string;
}

const UserCardAction = () => {
  return (
    <HStack>
      <PenSquare />
    </HStack>
  );
};

const UserCard = ({ displayName, email }: UserCardProps) => {
  return (
    <HStack justifyContent="space-between">
      <HStack gap="$3">
        <Avatar name={displayName || ""} hideLabel />
        <VStack>
          {displayName && <Heading>{displayName}</Heading>}
          {email && <Text>{email}</Text>}
        </VStack>
      </HStack>
      <UserCardAction />
    </HStack>
  );
};

export default UserCard;
