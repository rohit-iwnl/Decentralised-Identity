// Import polyfills
import "@thirdweb-dev/react-native-compat";
import {
  ConnectWallet,
  ThirdwebProvider,
  metamaskWallet,
} from "@thirdweb-dev/react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./screens/OnboardingScreen";
import Landing from "./screens/Landing/Landing";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import LandingScreen from "./screens/Landing/LandingScreen";
import RegisterScreen from "./screens/Landing/RegisterScreen";

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="cfb5750fd32101e1048951d071e61205"
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
      ]}
    >
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {isFirstLaunch && (
              <Stack.Screen name="onboarding" component={OnboardingScreen} />
            )}
            <Stack.Screen name="landing" component={LandingScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThirdwebProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
