import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
function PhoneLogin() {
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

      <TextInput 
      keyboardType="numeric"
      maxLength={10}
      placeholder={"Phone number"} style={styles.input} />

      
      <TouchableOpacity>
        <Text
          style={{
            margin: 30,
            elevation: 5,
            paddingHorizontal: 50,
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
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    paddingTop: 80,
    backgroundColor: "#FF9933",
  },
  input: {
    width: 350,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    // borderRadius: 10,
    fontSize: 20,
    paddingLeft: 30,
    backgroundColor: "white",

  },
});

export default PhoneLogin;



