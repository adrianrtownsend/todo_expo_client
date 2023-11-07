import * as React from "react";
import { TextInput, View } from "react-native";
import { GET_TODOS } from "../../../graphql";
import { useQuery } from "@apollo/client";
import {
  FirebaseProvider,
  useFirebase,
} from "../../../contexts/FirebaseContext";
import {
  Center,
  Text,
  Box,
  Button,
  ButtonText,
  ScrollView,
  VStack,
} from "@gluestack-ui/themed";
import Carousel from "../../../components/Carousel";

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
const todos = [
  {
    id: 1,
    title: "Task 1",
    isCompleted: false,
    user: users[0],
    description: "A task description",
  },
  {
    id: 2,
    title: "Task 2",
    isCompleted: true,
    user: users[0],
    description: "A task description",
  },
  {
    id: 3,
    title: "Task 3",
    isCompleted: false,
    user: users[1],
    description: "A task description",
  },
  {
    id: 4,
    title: "Task 1",
    isCompleted: false,
    user: users[3],
    description: "A task description",
  },
  {
    id: 5,
    title: "Task 2",
    isCompleted: true,
    user: users[0],
    description: "A task description",
  },
  {
    id: 6,
    title: "Task 3",
    isCompleted: false,
    user: users[2],
    description: "A task description",
  },
  // Add more todos as needed
];
const TodosCarousel = (pros) => {
  return (
    <Carousel
      type="item"
      header="Todos"
      data={todos}
      subHeader={users[0].username}
      link={"userTodos"}
          linkLabel={"View Todos"}
          itemScreen={"Task"}
    />
  );
};

const UsersCarousel = () => {
  return <Carousel type="avatar" data={users} header="Users" itemScreen={"Profile"}/>;
};

const StatsCarousel = (props) => {
  return (
    <Carousel type="stat" data={todos} header="Stats (Todos)"  link={"stats"}/>
  );
};

const Dashboard = ({ navigation }) => {
  // const { loading, error, data } = useQuery(GET_TODOS, {});

  return (
    <Center flex={1}>
    <VStack width="$full">
      <ScrollView>
        <TodosCarousel
          
        />
        <UsersCarousel  />
        <StatsCarousel  />
      </ScrollView>
      </VStack>
    </Center>
  );
};

export default Dashboard;
