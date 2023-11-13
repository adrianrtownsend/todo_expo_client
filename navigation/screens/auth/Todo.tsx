import * as React from "react";
import {
  Avatar,
  Box,
  Center,
  Heading,
  Image,
  Icon,
  Text,
  HStack,
  VStack,
  Pressable,
  ButtonText,
  Button,
  Progress,
  ProgressFilledTrack,
  Tooltip,
  View,
} from "@gluestack-ui/themed";
import { ChevronRight, Heart, Star, User } from "lucide-react-native";
import { AnimatePresence, Motion } from "@legendapp/motion";
import { ImageBackground, ScrollView } from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_TODO,
  UPDATE_TODO_ISCOMPLETED,
  DELETE_TODO,
} from "../../../graphql";
import { useRoute, useNavigation } from "@react-navigation/native";
import UserCard from "../../../components/UserCard";

const tabsData = [
  {
    title: "About",
  },
  {
    title: "Activity",
  },
];

const statsData = [
  { label: "Created date", data: "Feb 2, 2023" },
  { label: "Created date", data: "Feb 2, 2023" },
  { label: "Created date", data: "Feb 2, 2023" },
  { label: "Created date", data: "Feb 2, 2023" },
  { label: "Created date", data: "Feb 2, 2023" },
];

const Todo = () => {
  const [activeTab, setActiveTab] = React.useState(tabsData[0]);
  const navigation = useNavigation();
  const route = useRoute();
  const todoId = route.params?.params?.todoId || route.params?.todoId;
  const { loading, error, data } = useQuery(GET_TODO, {
    variables: { id: todoId },
  });
  const [
    updateTodoIsCompleted,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_TODO_ISCOMPLETED);
  const [
    deleteTodo,
    { data: deleteData, loading: deleteLoading, error: deleteError },
  ] = useMutation(DELETE_TODO);

  if (loading) {
    return <Text>loading...</Text>;
  }
  if (error) return <Text>Error: {error.message}</Text>;

  // const data = {
  //   id: 99,
  //   title: "Johns todo",
  //   description: "A description",
  //   isCompleted: false,
  // };

  // const { id, title, description, isCompleted } = data;
  const { todo } = data;

  const handleUpdateIsCompleted = (complete: boolean) => {
    updateTodoIsCompleted({
      variables: {
        id: todo.id,
        isCompleted: complete,
      },
    });
  };

  const handleDeleteTodo = async () => {
    await deleteTodo({
      variables: {
        id: todo.id,
      },
    });
  };

  const TodoBackground = () => {
    return (
      <Box width={"100%"} flex={1}>
        <Image
          source={{
            uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
          }}
          alt="Aang flying and surrounded by clouds"
          flex={1}
          width={"100%"}
        />
      </Box>
    );
  };

  const TodoTabContainer = (tab: any) => {
    return (
      <VStack gap="$1" px="$3">
        <Box>
          <Heading>Description</Heading>
          <Text>{todo?.description}</Text>
        </Box>
        <Box>
          <Heading>User</Heading>
          <UserCard
            displayName={todo.user.displayName}
            email={todo.user.email}
          />
        </Box>
        <Box>
          <Heading>Info</Heading>
          <Box flexWrap="wrap" flexDirection="row" gap={"$5"}>
            {statsData.map((s, i) => {
              return (
                <VStack key={i}>
                  <Text>{s.label}</Text>
                  <Text>{s.data}</Text>
                </VStack>
              );
            })}
          </Box>
        </Box>
      </VStack>
    );
  };

  const TodoDelete = () => {
    return (
      <HStack justifyContent="space-between">
        <Box>
          <Text>Delete Todo</Text>
        </Box>
        <Button onPress={handleDeleteTodo}>
          {deleteLoading ? "Deleting..." : "Delete"}
        </Button>
      </HStack>
    );
  };

  const HomestayInfoTabs = () => {
    return (
      <Box
        borderRadius={"$md"}
        backgroundColor="white"
        borderBottomWidth={1}
        borderColor="$borderLight50"
        sx={{
          "@md": { borderColor: "transparent", borderBottomWidth: 0 },
          _dark: { borderColor: "$borderDark900" },
        }}
        flex={3}
      >
        <VStack>
          <HStack justifyContent="space-between">
            <Text>id</Text>
            <Text>title</Text>
          </HStack>
          <Heading textAlign="center">{todo?.title}</Heading>
          <HStack justifyContent="space-between">
            <Text>id</Text>
            <Text>title</Text>
            <Text>description</Text>
          </HStack>
          <HStack
            space="lg"
            mx="$0.5"
            borderBottomWidth={"$1"}
            justifyContent="space-between"
          >
            {tabsData.map((tab: any) => {
              return (
                <Pressable
                  key={tab.title}
                  borderBottomWidth={activeTab === tab ? 3 : 0}
                  borderColor="$borderLight900"
                  sx={{
                    ":hover": {
                      borderBottomWidth: 3,
                      borderColor:
                        activeTab === tab
                          ? "$borderLight900"
                          : "$borderLight200",
                    },
                    _dark: {
                      borderColor: "$borderDark100",
                      ":hover": {
                        borderColor:
                          activeTab === tab
                            ? "$borderDark100"
                            : "$borderDark700",
                      },
                    },
                  }}
                  onPress={() => setActiveTab(tab)}
                >
                  <Text
                    size="sm"
                    color={
                      activeTab === tab ? "$textLight900" : "$textLight600"
                    }
                    sx={{
                      _dark: {
                        color:
                          activeTab === tab ? "$textDark50" : "$textDark400",
                      },
                    }}
                    fontWeight="$medium"
                  >
                    {tab.title}
                  </Text>
                </Pressable>
              );
            })}
          </HStack>
        </VStack>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <TodoTabContainer tab={activeTab} />
        </ScrollView>
      </Box>
    );
  };

  const TodoFooter = () => {
    return (
      <HStack justifyContent="space-between">
        <VStack>
          <Text>{"Status"}</Text>
          <Text>{todo.isCompleted ? "Complete" : "Incomplete"}</Text>
        </VStack>
        <Button
          bg="$darkBlue600"
          onPress={() => handleUpdateIsCompleted(!todo.isCompleted)}
          disabled={updateLoading}
        >
          <ButtonText fontSize="$sm" fontWeight="$medium">
            {updateLoading
              ? "Updating..."
              : `Mark ${todo.isCompleted ? "Incomplete" : "Complete"}`}
          </ButtonText>
        </Button>
      </HStack>
    );
  };

  return (
    <Box width={"100%"} height={"100%"}>
      <VStack flex={1}>
        <TodoBackground />
        <HomestayInfoTabs />
        <TodoDelete />
        <TodoFooter />
      </VStack>
    </Box>
  );
};

export default Todo;
