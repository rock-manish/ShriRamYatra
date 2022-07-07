import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
function SignUp() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 70,
          color: "black",
          fontFamily: "serif"
        }}
      >
        welcome
      </Text>

      <Text
        style={{
          fontSize: 30,
          fontFamily: "serif"
        }}
      >
        To
      </Text>

      <Text
        style={{
          fontSize: 30,
          color: "black",
          marginBottom: 30,
          fontFamily: "serif"
        }}
      >
        श्री राम विश्व शांति यात्रा
      </Text>

      <TextInput placeholder={"Username"} style={styles.input} />

      <TextInput
        placeholder={"Password"}
        secureTextEntry={true}
        maxLength={8}
        style={styles.input}
      />

      <TextInput
        placeholder={"Conform Password"}
        secureTextEntry={true}
        maxLength={8}
        style={styles.input}
      />
      <TouchableOpacity>
        <Text
          style={{
            margin: 30,
            elevation: 5,
            paddingHorizontal: 40,
            paddingVertical: 7,
            color: "orange",
            backgroundColor: "black",
            borderRadius: 40,
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "serif"
          }}
        >
          SignUp
        </Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#FF9933",
  },
  input: {
    width: 350,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    // borderRadius: 10,
    fontSize: 20,
    paddingLeft: 30,
    backgroundColor: "white",
    
  },
});
export default SignUp;
