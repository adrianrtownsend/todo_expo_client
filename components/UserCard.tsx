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

interface UserCardProps {
  heading?: string;
  subHeading?: string;
  text?: string;
}

const UserCard = ({ heading, subHeading, text }: UserCardProps) => {
  return (
    <HStack>
      <Avatar name={"Jon smith"} />
      <VStack>
        {heading && <Heading>{heading}</Heading>}
        {subHeading && <Text>{subHeading}</Text>}
        {text && <Text>{text}</Text>}
      </VStack>
      <HStack></HStack>
    </HStack>
  );
};

export default UserCard;
