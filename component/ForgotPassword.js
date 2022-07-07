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
function ForgotPassword() {
  return (
    <View style={styles.container}>
      
      <View style={{marginLeft:20}}>
        <Text style={{fontSize:50,fontWeight:"bold"}}>Forgot</Text>
        <Text style={{fontSize:50,fontWeight:"bold",marginBottom:30}}>Password?</Text>
        <Text style={{fontSize:20,fontStyle:'italic',paddingBottom:10}}>Don't worry! It happens. please enter the address associated with you account</Text>
      </View>
      <View style={{alignItems:"center"}}>
      <TextInput
        placeholder={"Email ID"}
        style={styles.input}
      />
      </View>
      <View style={{alignItems:'center'}}>
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
          Submit
        </Text>
      </TouchableOpacity>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    
    paddingTop: 60,
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
export default ForgotPassword;
