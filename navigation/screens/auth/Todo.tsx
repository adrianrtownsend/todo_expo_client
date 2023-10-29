import * as React from "react";
import { Center, Button, Box, Text, VStack } from "@gluestack-ui/themed";
import { useQuery } from "@apollo/client";
import { GET_TODO } from "../../../graphql";

const Todo = ({ route, navigation }) => {
  const { todoId } = route.params;
  const { loading, error, data } = useQuery(GET_TODO, {
    id: todoId,
  });

  if (loading) {
    return <Text>loading...</Text>;
  }
  if (error) return <Text>Error: {error.message}</Text>;

  const { id, title, description, isCompleted } = data;

  return (
    <Center>
      <VStack>
        <Text>Todo id: {id}</Text>
        <Text>Todo title: {title}</Text>
        <Text>Todo description: {description}</Text>
        <Text>Todo isCompleted {isCompleted}</Text>
      </VStack>
    </Center>
  );
};

export default Todo;
