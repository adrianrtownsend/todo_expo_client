import { Center, VStack } from "@gluestack-ui/themed";
import UserCard from "../../../components/UserCard";
import TabList from "../../../components/TabList";

const Profile = () => {
  return (
    <Center flex={1}>
      <VStack width="$full" gap="$5">
        <UserCard />
        <TabList />
      </VStack>
    </Center>
  );
};

export default Profile;
