import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input } from "react-native-elements";
import Ionicon from "react-native-vector-icons/Ionicons";
import { ConnectWallet,useAddress } from "@thirdweb-dev/react-native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const address = useAddress();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        behavior="padding"
      >
        <View style={styles.content}>
          <Text style={styles.title}>Register</Text>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Name"
              leftIconContainerStyle={{
                marginRight: 10,
              }}
              leftIcon={<Ionicon name="person-outline" size={24} />}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Email address"
              leftIconContainerStyle={{
                marginRight: 10,
              }}
              leftIcon={<Ionicon name="mail-unread-outline" size={24} />}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Password"
              secureTextEntry
              leftIconContainerStyle={{
                marginRight: 10,
              }}
              leftIcon={<Ionicon name="keypad-outline" size={24} />}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Confirm Password"
              secureTextEntry
              leftIconContainerStyle={{
                marginRight: 10,
              }}
              leftIcon={<Ionicon name="keypad-outline" size={24} />}
            />
          </View>
          <View style={styles.inputContainer}>
            {walletAddress === "" ? (
              <ConnectWallet
                theme={"dark"}
                buttonTitle="Connect your wallet to continue"
                switchToActiveChain={true}
                modalSize={"compact"}
                welcomeScreen={{
                  title: "Welcome to decentalised identity",
                  subtitle: "Connect wallet to get started",
                }}
              />
            ) : (
              <Button
                title={`Connected: ${walletAddress}`}
                type="clear"
                titleStyle={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "white",
                }}
                onPress={() => {
                  setWalletAddress("");
                }}
                containerStyle={{
                  backgroundColor: "black",
                  width: "100%",
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            )}
          </View>
          {(!address) ? <Text>Not connected</Text> : <Text>Connected</Text>}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
    padding: 10,
    borderBottomColor: "#fff",
    fontSize: 16,
  },
});
