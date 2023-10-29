import {
  Box,
  Center,
  FlatList,
  VStack,
  HStack,
  Text,
} from "@gluestack-ui/themed";
import Avatar from "../../../components/Avatar";
import { Home, User } from "lucide-react-native";
import React, { ReactNode } from "react";

interface MenuItemsProps {
  id: number;
  name: string;
  onPress?: ReactNode;
  label?: string;
}

const menuItems = [
  {
    id: 1,
    name: "information",
    type: "stack",
  },
  {
    id: 2,
    name: "logout",
    type: "modal",
  },
];

const Profile = ({ navigation }) => {
  return (
    <Box>
      <VStack>
        <Avatar name={"Jon smith"} />
        <FlatList
          data={menuItems}
          renderItem={({ item }) => (
            <Box
              key={item.id}
              borderBottomWidth="$1"
              borderColor="$trueGray800"
              sx={{
                _dark: {
                  borderColor: "$trueGray100",
                },
                "@base": {
                  pl: 0,
                  pr: 0,
                },
                "@sm": {
                  pl: "$4",
                  pr: "$5",
                },
              }}
              py="$2"
            >
              <HStack space="md">
                <Home />
                <VStack>
                  <Text
                    color="$coolGray800"
                    fontWeight="$bold"
                    sx={{
                      _dark: {
                        color: "$warmGray100",
                      },
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    onPress={() => console.log("clicked")}
                    color="$coolGray600"
                    sx={{
                      _dark: {
                        color: "$warmGray200",
                      },
                    }}
                  >
                    {item.type}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </VStack>
    </Box>
  );
};

export default Profile;

/**
 * # Profile Screen
 *
 * Display profile information
 * social style
 */
