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
function Login() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 70,
          color: "black",

          
        }}
      >
        welcome
      </Text>
      
      <Text style={{
          fontSize: 30,
        }}>To</Text>

<Text
        style={{
          fontSize: 30,
          color: "black",
          marginBottom: 30,
          
        }}
      >
        श्री राम विश्व शांति यात्रा
      </Text>

      <TextInput placeholder={"Username"} style={styles.input} />

      <TextInput
        placeholder={"Password"}
        secureTextEntry={true}
        style={styles.input}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ paddingRight: 120 }}>
          <Text style={{ fontSize: 16 }}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 16 }}>Forget Password ?</Text>
        </TouchableOpacity>
      </View>
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
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      
      <View style={{flexDirection:"row",paddingTop:20}}>
        <TouchableOpacity style={{paddingRight: 20}}>
          <Image
            style={{ height: 45, width: 45 }}
            source={require("./fb2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingRight: 20}}>
          <Image
            style={{ height: 45, width: 45 }}
            source={require("./g.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingRight: 20}}>
          <Image
            style={{ height: 40, width: 40 }}
            source={require("./phone.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    paddingTop: 80,
    backgroundColor: "orange",
  },
  input: {
    width: 350,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 20,
    paddingLeft: 30,
    backgroundColor: "white",
  },
});
export default Login;
