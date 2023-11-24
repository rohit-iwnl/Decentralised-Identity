// Import polyfills
import "@thirdweb-dev/react-native-compat";
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
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
     {isFirstLaunch && (<Stack.Screen name="onboarding" component={OnboardingScreen} />)}
      <Stack.Screen name="landing" component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
