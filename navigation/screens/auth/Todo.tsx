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
import { GET_TODO } from "../../../graphql";
import { useRoute, useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation()
  const route = useRoute()
  const { todoId } = route.params;
  // const { loading, error, data } = useQuery(GET_TODO, {
  //   id: todoId,
  // });

  // if (loading) {
  //   return <Text>loading...</Text>;
  // }
  // if (error) return <Text>Error: {error.message}</Text>;

  // const { id, title, description, isCompleted } = data;

  const data = {
    id: 99,
    title: "Johns todo",
    description: "A description",
    isCompleted: false,
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
      <VStack>
        <Heading>Description</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Heading>User</Heading>
        <HStack justifyContent="space-between">
          <HStack>
            <Avatar
              src={
                "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg"
              }
              name={"Jones"}
            />
            <VStack>
              <Text>{"John Jones"}</Text>
              <Text>{"johnJones"}</Text>
            </VStack>
          </HStack>
          <HStack>
            <User />
          </HStack>
        </HStack>
        <Box>
          <Heading>Info</Heading>
          <Box flexWrap="wrap" flexDirection="row" gap={"$5"}>
            {statsData.map((s) => {
              return (
                <VStack>
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
          <Heading textAlign="center">Task Title</Heading>
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
          <Text>{"Incomplete"}</Text>
        </VStack>
        <Button bg="$darkBlue600" onPress={() => console.log("clicked")}>
          <ButtonText fontSize="$sm" fontWeight="$medium">
            {"Mark Complete"}
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
        <TodoFooter />
      </VStack>
    </Box>
  );
};

export default Todo;
