import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  HStack,
  VStack,
  Pressable,
  Button,
} from "@gluestack-ui/themed";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as React from "react";
import { ScrollView } from "react-native";

import ConfirmModal from "../../../components/ConfirmModal";
import UserCard from "../../../components/UserCard";
import {
  GET_TODO,
  UPDATE_TODO_ISCOMPLETED,
  DELETE_TODO,
  GET_TODOS,
} from "../../../graphql";

const tabsData = [
  {
    title: "About",
  },
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
  ] = useMutation(DELETE_TODO, {
    update(cache, { data: { delete_todo } }) {
      const existingTodos: any = cache.readQuery({ query: GET_TODOS });
      const newTodos = existingTodos!.todos.filter(
        (t: any) => t.id !== delete_todo.id,
      );
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: newTodos },
      });
    },
  });

  if (loading) {
    return <Text>loading...</Text>;
  }
  if (error) return <Text>Error: {error.message}</Text>;

  const { todo } = data;

  const statsData = [
    { label: "Created Date", data: todo.created_at },
    { label: "Completed Date", data: todo.completed_at },
  ];

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
      <Box width="100%" flex={1}>
        <Image
          source={{
            uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
          }}
          alt="Aang flying and surrounded by clouds"
          flex={1}
          width="100%"
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
            userId={todo.user.userId}
          />
        </Box>
        <Box>
          <Heading>Info</Heading>
          <Center
            flexWrap="wrap"
            flexDirection="row"
            justifyContent="space-around"
            gap="$5"
          >
            {statsData.map((s, i) => {
              return (
                <VStack key={i}>
                  <Text>{s.label}</Text>
                  <Text>{s.data}</Text>
                </VStack>
              );
            })}
          </Center>
        </Box>
      </VStack>
    );
  };

  const HomestayInfoTabs = () => {
    return (
      <Box flex={3}>
        <VStack gap="$3">
          <VStack p="$3">
            <Heading textAlign="center">{todo?.title}</Heading>
            <Text>{todo.user.displayName}</Text>
          </VStack>
          <HStack
            space="lg"
            mx="$0.5"
            borderBottomWidth="$1"
            justifyContent="space-between"
            px="$3"
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
        <ScrollView>
          <TodoTabContainer tab={activeTab} />
        </ScrollView>
      </Box>
    );
  };

  const TodoFooter = () => {
    return (
      <HStack justifyContent="space-between" gap="$3" p="$3">
        <Button
          onPress={() => handleUpdateIsCompleted(!todo.isCompleted)}
          disabled={updateLoading}
          flex={3}
        >
          {updateLoading
            ? "Updating..."
            : `Mark ${todo.isCompleted ? "Incomplete" : "Complete"}`}
        </Button>

        <ConfirmModal
          text="Are you sure you want to delete this todo?"
          header="Confirm Delete"
          submit={{
            label: "Delete",
            action: handleDeleteTodo,
            loading: deleteLoading,
            data: !!deleteData,
          }}
          confirm={{
            text: "Successfully deleted todo",
            button: {
              label: "Return to Dashbboard",
              action: () => navigation.navigate("Dashboard"),
            },
          }}
          cancel={{ label: "Cancel" }}
        />
      </HStack>
    );
  };

  return (
    <Box width="100%" height="100%">
      <VStack flex={1}>
        <TodoBackground />
        <HomestayInfoTabs />
        <TodoFooter />
      </VStack>
    </Box>
  );
};

export default Todo;
