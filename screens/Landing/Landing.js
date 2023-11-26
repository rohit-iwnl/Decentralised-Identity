import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input } from "react-native-elements";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

const Landing = () => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  const { width, height } = Dimensions.get("window");
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#222831" }}>
        <View style={styles.container}>
          {/* Top */}
          <View>
            <Text>Logo</Text>
          </View>

          {/* Bottom */}
          <View>
            <View>
              <Input
                placeholder="Password"
                secureTextEntry
                containerStyle={{
                  opacity: 0.7,
                  backgroundColor: "#393e46",
                  alignItems: "center",
                  borderRadius: 32,
                  marginBottom: 24,
                }}
              ></Input>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* Left Div */}
              <View>
                <Text style={[{ color: "white", marginRight: 6, fontSize: 16 },styles.poppinsMedium]}>
                  Are you a new user?
                </Text>
              </View>
              {/* Right div */}
              <View>
                <Pressable
                  onPress={() => {
                    console.log("Sign up pressed");
                  }}
                >
                  <Text
                    style={[{
                      color: "#437ede",
                      fontSize: 16,
                      textDecorationColor: "white",
                      textDecorationLine: "underline",
                    }, styles.poppinsMedium]}
                  >
                    Sign up
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 50,
    paddingTop: 50,
  },
  buttonContainer: {
    width: Dimensions.get("window").width * 0.8,
    marginBottom: 10,
    borderRadius: 2,
  },
  buttonTitleStyle: {
    fontSize: 20,
    fontWeight: "600",
  },
  poppinsMedium : {
    fontFamily: "Poppins_500Medium",
  }
});
