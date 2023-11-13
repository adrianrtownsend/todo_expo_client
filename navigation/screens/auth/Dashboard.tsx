import * as React from "react";
import { TextInput, View } from "react-native";
import { GET_TODOS, GET_USERS } from "../../../graphql";
import { useQuery } from "@apollo/client";
import {
  FirebaseProvider,
  useFirebase,
} from "../../../contexts/FirebaseContext";
import {
  Box,
  Center,
  Button,
  ButtonText,
  Fab,
  FabIcon,
  FabLabel,
  ScrollView,
  VStack,
  Text,
  AddIcon,
} from "@gluestack-ui/themed";
import Carousel from "../../../components/Carousel";
import { useNavigation } from "@react-navigation/native";
import LoadingWrapper from "../../../components/LoadingWrapper";

const users = [
  {
    id: 1,
    username: "user1",
    email: "user1@example.com",
    firstName: "Jane",
    lastName: "Doe",
    password: "password1",
    isPrivate: false,
  },
  {
    id: 2,
    username: "user2",
    email: "user2@example.com",
    firstName: "John",
    lastName: "Jones",
    password: "password2",
    isPrivate: false,
  },
  {
    id: 3,
    username: "user3",
    email: "user3@example.com",
    firstName: "Sam",
    lastName: "Smith",
    password: "password3",
    isPrivate: false,
  },
  {
    id: 4,
    username: "user4",
    email: "user4@example.com",
    firstName: "Don",
    lastName: "Julio",
    password: "password4",
    isPrivate: false,
  },
];

const TodosCarousel = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  return (
    <LoadingWrapper isLoading={loading}>
      <Carousel
        type="item"
        header="Todos"
        data={data?.todos}
        subHeader={users[0].username}
        link={"userTodos"}
        linkLabel={"View Todos"}
        itemScreen={"Task"}
      />
    </LoadingWrapper>
  );
};

const UsersCarousel = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  console.log("data...: ", data);
  return (
    <Carousel
      type="avatar"
      data={data?.users}
      header="Users"
      itemScreen={"Profile"}
    />
  );
};

// const StatsCarousel = () => {
//   const { loading, error, data } = useQuery(GET_TODOS);
//   return (
//     <LoadingWrapper isLoading={loading}>
//       <Carousel
//         type="stat"
//         data={data?.todos}
//         header="Stats (Todos)"
//         link={"stats"}
//       />
//     </LoadingWrapper>
//   );
// };

const CreateTodoFab = () => {
  const navigation = useNavigation();
  return (
    <Fab
      size="md"
      placement="bottom right"
      onPress={() => navigation.navigate("TodoForm")}
    >
      <FabIcon as={AddIcon} mr="$1" />
      <FabLabel>Add Todo</FabLabel>
    </Fab>
  );
};

const Dashboard = () => {
  return (
    <VStack flex={1} width="$full">
      <Box py="$3">
        <ScrollView>
          <TodosCarousel />
          <UsersCarousel />
          {/* <StatsCarousel /> */}
        </ScrollView>
      </Box>
      <CreateTodoFab />
    </VStack>
  );
};

export default Dashboard;
