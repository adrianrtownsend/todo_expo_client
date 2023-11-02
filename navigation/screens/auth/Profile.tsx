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
import { useFirebase } from "../../../contexts/FirebaseContext";

interface MenuItemsProps {
  id: number;
  name: string;
  onPress?: ReactNode;
  label?: string;
  action?: () => ReactNode;
}

const Profile = ({ navigation }) => {
  const firebase = useFirebase();

  const menuItems = [
    {
      id: 1,
      name: "information",
      type: "stack",
      action: () => navigation.navigate("Information"),
    },
    {
      id: 2,
      name: "logout",
      type: "modal",
      action: () => firebase.logout(),
    },
  ];

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
                    onPress={item.action}
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
