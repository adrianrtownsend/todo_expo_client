import { Center, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import Avatar from "../../../components/Avatar";
import MenuList from "../../../components/MenuList";
import { useFirebase } from "../../../contexts/FirebaseContext";

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
        <Avatar
          displayName={firebase.user.displayName}
          email={firebase.user.email}
          uid={firebase.user.uid}
        />
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
