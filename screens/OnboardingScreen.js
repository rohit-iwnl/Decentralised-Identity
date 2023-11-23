import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";


const OnboardingScreen = () => {
  const naviagtion = useNavigation();
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <Onboarding
      onDone={() => naviagtion.replace("landing")}
      onSkip={()=> naviagtion.replace("landing")}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../assets/icon.png")}
                style={{
                  height: height / 3,
                  width: width / 1.2,
                }}
              />
            ),
            title: "Hello",
            subtitle: "World",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../assets/icon.png")}
                style={{
                  height: height / 3,
                  width: width / 1.2,
                }}
              />
            ),
            title: "Hello",
            subtitle: "World",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../assets/icon.png")}
                style={{
                  height: height / 3,
                  width: width / 1.2,
                }}
              />
            ),
            title: "Hello",
            subtitle: "World",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../assets/icon.png")}
                style={{
                  height: height / 3,
                  width: width / 1.2,
                }}
              />
            ),
            title: "Hello",
            subtitle: "World",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
