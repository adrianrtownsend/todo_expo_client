import { useQuery } from "@apollo/client";
import {
  Box,
  Fab,
  FabIcon,
  FabLabel,
  ScrollView,
  VStack,
  AddIcon,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";

import Carousel from "../../../components/Carousel";
import LoadingWrapper from "../../../components/LoadingWrapper";
import { GET_TODOS, GET_USERS } from "../../../graphql";

const TodosCarousel = () => {
  const { loading, data } = useQuery(GET_TODOS);

  return (
    <LoadingWrapper isLoading={loading}>
      <Carousel
        type="item"
        header="Todos"
        data={data?.todos}
        itemScreen="Task"
      />
    </LoadingWrapper>
  );
};

const UsersCarousel = () => {
  const { data } = useQuery(GET_USERS);
  return (
    <Carousel
      type="avatar"
      data={data?.users}
      header="Users"
      itemScreen="Profile"
    />
  );
};

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
        </ScrollView>
      </Box>
      <CreateTodoFab />
    </VStack>
  );
};

export default Dashboard;
