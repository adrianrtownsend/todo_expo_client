import { SafeAreaView } from "react-native";
import Navigation from "./navigation";
import { FirebaseProvider } from "./contexts/FirebaseContext";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FirebaseProvider>
        <GluestackUIProvider config={config}>
          <Navigation />
        </GluestackUIProvider>
      </FirebaseProvider>
    </SafeAreaView>
  );
}
