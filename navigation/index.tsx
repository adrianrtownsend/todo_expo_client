import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Box } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigator from "./screens/auth";
import PublicNavigator from "./screens/public";
import LoadingWrapper from "../components/LoadingWrapper";
import { useFirebase } from "../contexts/FirebaseContext";

const Stack = createNativeStackNavigator();

const Navigation = (props: object) => {
  const firebase = useFirebase();
  const client = new ApolloClient({
    uri: process.env.EXPO_PUBLIC_APOLLO_CLIENT_SERVER_URL,
    cache: new InMemoryCache(),
    defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
    headers: {
      authorization: firebase.user?.accessToken || "",
    },
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Box flex={1}>
          <Stack.Navigator>
            {firebase.loading ? (
              <Stack.Screen
                name="Splash"
                component={LoadingWrapper}
                options={{ headerShown: false }}
              />
            ) : firebase.user ? (
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
