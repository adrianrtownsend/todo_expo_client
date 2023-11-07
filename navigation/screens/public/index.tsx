import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFirebase } from "../../../contexts/FirebaseContext";

import Login from "./Login";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";
import ForgotPassword from "./ForgotPassword";
import CreateProfile from "./CreateProfile";

const PublicStack = createNativeStackNavigator();

const PublicNavigator = () => {
  const firebase = useFirebase();

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
      <PublicStack.Screen name="CreateProfile" component={CreateProfile} />
      <PublicStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <PublicStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />
    </PublicStack.Navigator>
  );
};

export default PublicNavigator;
