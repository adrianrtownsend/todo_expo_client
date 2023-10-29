import * as React from "react";
import { TextInput, View } from "react-native";
import { GET_TODOS } from "../../../graphql";
import { useQuery } from "@apollo/client";
import {
  FirebaseProvider,
  useFirebase,
} from "../../../contexts/FirebaseContext";
import { Center, Text, Box, Button, ButtonText } from "@gluestack-ui/themed";
import Carousel from "../../../components/Carousel";

const users = [
  {
    username: "user1",
    email: "user1@example.com",
    firstName: "Jane",
    lastName: "Doe",
    password: "password1",
    isPrivate: false,
  },
  {
    username: "user2",
    email: "user2@example.com",
    firstName: "John",
    lastName: "Jones",
    password: "password2",
    isPrivate: false,
  },
  {
    username: "user3",
    email: "user3@example.com",
    firstName: "Sam",
    lastName: "Smith",
    password: "password3",
    isPrivate: false,
  },
  {
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
    title: "Task 1",
    isCompleted: false,
    user: users[0],
    description: "A task description",
  },
  {
    title: "Task 2",
    isCompleted: true,
    user: users[0],
    description: "A task description",
  },
  {
    title: "Task 3",
    isCompleted: false,
    user: users[1],
    description: "A task description",
  },
  {
    title: "Task 1",
    isCompleted: false,
    user: users[3],
    description: "A task description",
  },
  {
    title: "Task 2",
    isCompleted: true,
    user: users[0],
    description: "A task description",
  },
  {
    title: "Task 3",
    isCompleted: false,
    user: users[2],
    description: "A task description",
  },
  // Add more todos as needed
];
const TodosCarousel = (props) => {
  return (
    <Carousel
      type="item"
      header="Todos"
      data={todos}
      subHeader={users[0].username}
      {...props}
    />
  );
};

const UsersCarousel = (props) => {
  return <Carousel type="avatar" data={users} header="Users" {...props} />;
};

const StatsCarousel = (props) => {
  return (
    <Carousel type="stat" data={todos} header="Stats (Todos)" {...props} />
  );
};

const Dashboard = ({ navigation }) => {
  // const { loading, error, data } = useQuery(GET_TODOS, {});

  return (
    <Center>
      <TodosCarousel
        link={"userTodos"}
        linkLabel={"View Todos"}
        itemScreen={"Task"}
      />
      <UsersCarousel itemScreen={"Profile"} />
      <StatsCarousel link={"stats"} />
    </Center>
  );
};

export default Dashboard;
