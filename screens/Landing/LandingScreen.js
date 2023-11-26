import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Button, Input } from "react-native-elements";
import Ionicon from "react-native-vector-icons/Ionicons";
import { KeyboardAvoidingView } from "react-native";

const LandingScreen = ({ navigation }) => {
  const loginFn = () => {
    if (walletAddress === "" || password === "") {
      Alert.alert("Please fill all fields");
    } else {
      console.log(walletAddress, password);
      Alert.alert("Login");
    }
  };

  const registerUser = () => {
    navigation.push("register");
  };

  const [walletAddress, setWalletAddress] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputContainer}>
            <Input
              onChangeText={(e) => {
                setWalletAddress(e);
              }}
              placeholder="Wallet Address"
              leftIcon={<Ionicon name="wallet-outline" size={22} />}
              leftIconContainerStyle={{
                marginRight: 10,
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              onChangeText={(e) => {
                setPassword(e);
              }}
              secureTextEntry={true}
              placeholder="Password"
              leftIcon={<Ionicon name="key-outline" size={22} />}
              leftIconContainerStyle={{
                marginRight: 10,
              }}
            />
          </View>
          <View>
            <Pressable
              onPress={() => {
                Alert.alert("Login");
              }}
              style={{ alignSelf: "flex-end" }}
            >
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </Pressable>
          </View>
          <Button
            title="Login"
            type="clear"
            titleStyle={{
              color: "white",
              fontSize: 18,
            }}
            onPress={loginFn}
            containerStyle={styles.loginButton}
          />
          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orLine} />
          </View>
          <Button
            title="Register"
            type="clear"
            icon={
              <Ionicon
                name="person-add-outline"
                size={22}
                style={styles.icon}
              />
            }
            titleStyle={{
              color: "black",
              fontSize: 18,
              fontWeight: "bold",
            }}
            onPress={registerUser}
            containerStyle={styles.registerButton}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    position: "relative",
  },
  icon: {
    marginRight: 15,
  },
  input: {
    borderBottomWidth: 1.5,
    flex: 1,
    paddingBottom: 10,
    borderBottomColor: "#fff",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#437eda",
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 24,
  },
  forgotPassword: {
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  orLine: {
    height: 1,
    backgroundColor: "black",
    flex: 1,
  },
  orText: {
    color: "black",
    marginHorizontal: 8,
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },
  registerButton: {
    backgroundColor: "#d3d3d3",
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 10,
  },
});
