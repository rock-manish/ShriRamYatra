import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  onChangePhone,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const AuthScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const onChangeText = (number) => {
    setPhoneNumber(number);
  };
  return (
    <View style={Styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={"padding"}
        style={Styles.containerAvoiddingView}
      >
        <Text style={Styles.textTitle}>{"Please input Your mobile phone"}</Text>
        <View style={Styles.containerInput}>
          <View style={Styles.openDialogView}>
            <Text>{"+91"}</Text>
          </View>
          <TextInput
            style={Styles.phoneInputStyle}
            placeholder="902 291 011"
            keyboardType="numeric"
            // value='{phoneNumber}'
            onChangeText={onChangePhone}
            secureTextEntry={false}
          />
          <View>
            <TouchableOpacity>
              <Text style={{ color: "#ffffff" ,alignItems:"center"}}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAvoiddingView: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  textTitle: {
    marginBottom: 50,
    marginTop: 50,
    fontSize: 15,
  },
  containerInput: {
    flexDirection: "row",
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    borderBottomColor: "1.5",
  },
  openDialogView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  phoneInputStyle: {
    marginLeft: 5,
    flex: 1,
    height: 50,
  },
});

export default AuthScreen;
