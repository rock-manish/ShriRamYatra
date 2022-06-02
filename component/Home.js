import React from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./r1.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center", opacity: 1 }}
      >
        <View />
        <View>
          {/* <Image
      style={{ width: 300, height: 420, marginTop: 30 }}
      source={require("./r2.jpg")}
    /> */}
        </View>
        <Text style={styles.text}>श्री राम विश्व शांति यात्रा</Text>
        <View>
          <View style={{ paddingTop: 15 }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.button}>कृपया यात्रा के लिए यहां क्लिक करें</Text>
          </TouchableOpacity>
          </View>

          
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:"center",
    // alignItems: "center",
    // backgroundColor: "orange",
  },
  text: {
    fontSize: 50,
    color: "red",
    marginTop: 20,
    // borderWidth: 1,
    backgroundColor: "white",
    // borderRadius: 15,
  },
  btn: {
    textAlign: "center",
    backgroundColor:"white"
    
    
  },
  // shona:{

  // },
  button: {
    textAlign: "center",
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
  },
});
export default Home;
