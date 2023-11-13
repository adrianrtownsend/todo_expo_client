import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./Dashboard";
import Todo from "./Todo";
import Profile from "./Profile";
import Information from "./Information";
import Settings from "./Settings";
import { Home, User, Settings as SettingsIcon } from "lucide-react-native";
import { useFirebase } from "../../../contexts/FirebaseContext";
import TodoForm from "./TodoForm";

const Tab = createBottomTabNavigator();
const TodoStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const TodoNavigator = () => {
  return (
    <TodoStack.Navigator>
      <TodoStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <TodoStack.Screen
        name="Todo"
        component={Todo}
        // options={{ presentation: "modal" }}
      />
      <TodoStack.Screen
        name="TodoForm"
        component={TodoForm}
        options={{ presentation: "modal" }}
      />
    </TodoStack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="Information" component={Information} />
    </SettingsStack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Todo") {
            return <Home />;
          } else if (route.name === "Profile") {
            return <User />;
          } else if (route.name === "Settings") {
            return <SettingsIcon />;
          }
        },
      })}
    >
      <Tab.Screen
        name="Todo"
        component={TodoNavigator}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );
};

export default AuthNavigator;
