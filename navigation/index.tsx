import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./screens/auth";
import PublicNavigator from "./screens/public";
import { useFirebase } from "../contexts/FirebaseContext";
import { Center, Box, Spinner } from "@gluestack-ui/themed";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const Stack = createNativeStackNavigator();

const SplashScreen = () => {
  return (
    <Center flex={1}>
      <Spinner size="large" />
    </Center>
  );
};

const Navigation = (props: {}) => {
  const firebase = useFirebase();
  const token = firebase.user?.token || "";
  const client = new ApolloClient({
    uri: process.env.EXPO_PUBLIC_APOLLO_CLIENT_SERVER_URL,
    cache: new InMemoryCache(),
    defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
    headers: {
      authorization: token,
    },
  });

  const userContext = null;

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Box flex={1}>
          <Stack.Navigator>
            {firebase.loading ? (
              <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
            ) : firebase.user && userContext ? (
              <Stack.Screen
                name="Auth"
                component={AuthNavigator}
                options={{ headerShown: false }}
              />
            ) : (
              <Stack.Screen
                name="Public"
                component={PublicNavigator}
                options={{ headerShown: false }}
              />
            )}
          </Stack.Navigator>
        </Box>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default Navigation;
