import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Signup from "./Signup";

const PublicStack = createNativeStackNavigator();

const PublicNavigator = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <PublicStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <PublicStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
    </PublicStack.Navigator>
  );
};

export default PublicNavigator;
