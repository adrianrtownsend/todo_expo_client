import {
  Box,
  Center,
  FlatList,
  Pressable,
  VStack,
  HStack,
  Text,
} from "@gluestack-ui/themed";
import Avatar from "../../../components/Avatar";
import React, { ReactNode } from "react";
import { useFirebase } from "../../../contexts/FirebaseContext";
import MenuList from "../../../components/MenuList";
import { useNavigation } from "@react-navigation/native";

interface MenuItemsProps {
  id: number;
  name: string;
  label?: string;
  action?: () => ReactNode;
}

const Settings = () => {
  const firebase = useFirebase();
  const navigation = useNavigation();

  const menuItems = [
    {
      id: 1,
      name: "Edit Information",
      action: () => navigation.navigate("Information"),
      icon: "user",
    },
    {
      id: 2,
      name: "Log Out",
      action: () => firebase.logout(),
      icon: "logout",
    },
    {
      id: 3,
      name: "Delete Account",
      action: () => firebase.deleteUserProfile(),
      icon: "trash",
    },
  ];

  return (
    <Center flex={1}>
      <VStack width="$full">
        <Avatar name={"Jon smith"} />
        <MenuList items={menuItems} />
      </VStack>
    </Center>
  );
};

export default Settings;

/**
 * # Profile Screen
 *
 * Display profile information
 * social style
 */
