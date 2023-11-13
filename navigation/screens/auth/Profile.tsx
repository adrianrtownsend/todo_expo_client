import { Box, Center, VStack } from "@gluestack-ui/themed";
import UserCard from "../../../components/UserCard";
import TabList from "../../../components/TabList";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useFirebase } from "../../../contexts/FirebaseContext";
import { useQuery } from "@apollo/client";
import { GET_USER, GET_TODOS } from "../../../graphql";
import ScrollItemList from "../../../components/ScrollItemList";
import Loading from "../../../components/Loading";

const ProfileScrollList = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  console.log("todos herrr: ", data?.todos);
  return loading ? <Loading /> : <ScrollItemList items={data?.todos} />;
};

const Profile = () => {
  const route = useRoute();
  const firebase = useFirebase();
  const userId =
    route.params?.params?.userId || route.params?.userId || firebase.user.uid;
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
  });

  if (loading) console.log("loading");
  if (error) console.log("error: ", error);
  if (data) console.log("data: ", data);

  return (
    <Center>
      <VStack width="$full" flex={1}>
        <Box flex={1}>
          <UserCard
            displayName={data?.user?.displayName}
            email={data?.user?.email}
          />
        </Box>
        <Box flex={3}>
          <ProfileScrollList />
        </Box>
      </VStack>
    </Center>
  );
};

export default Profile;
