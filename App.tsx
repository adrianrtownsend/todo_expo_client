import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Navigation from './navigation';
import { FirebaseProvider, useFirebase } from './contexts/FirebaseContext';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

/**
 * Stuff to install
 * [] react navigation
 * [] apollo client
 * [] firebase
 * [] gluestack
 */

const client = new ApolloClient({
	// uri: process.env.EXPO_PUBLIC_APOLLO_CLIENT_SERVER_URL,
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
	defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FirebaseProvider>
				<ApolloProvider client={client}>
					<GluestackUIProvider config={config}>
						<Navigation />
					</GluestackUIProvider>
				</ApolloProvider>
			</FirebaseProvider>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
