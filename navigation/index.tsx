import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/public/Login";
import Signup from "./screens/public/Signup";
import ResetPassword from "./screens/public/ResetPassword";
import ForgotPassword from "./screens/public/ForgotPassword";
import { View, Text } from "react-native";
import Auth from "./screens/auth";
import { useFirebase } from "../contexts/FirebaseContext";

const Stack = createNativeStackNavigator();

const SplashScreen = () => {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

const Navigation = (props: {}) => {
  const auth = useFirebase();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth.loading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : !auth.user ? (
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
