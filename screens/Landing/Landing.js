import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input } from "react-native-elements";

const Landing = () => {
  const { width, height } = Dimensions.get("window");
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
              <Text style={{color:'white',marginRight:6,fontSize:18}}>Are you a new user?</Text>
            </View>
            {/* Right div */}
            <View>
              <Pressable>
                <Text style={{color:'#437ede',fontSize:18,textDecorationColor:'white'}}>Sign up</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
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
});
