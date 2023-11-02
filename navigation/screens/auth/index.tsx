import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./Dashboard";
import Todo from "./Todo";
import Profile from "./Profile";
import Information from "./Information";
import { Home, User } from "lucide-react-native";

const Tab = createBottomTabNavigator();
const TodoStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

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
        options={{ headerShown: false }}
      />
    </TodoStack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Information" component={Information} />
    </ProfileStack.Navigator>
  );
};

const Auth = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Todo") {
            return <Home />;
          } else if (route.name === "Profile") {
            return <User />;
          }
        },
      })}
    >
      <Tab.Screen
        name="Todo"
        component={TodoNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Auth;
