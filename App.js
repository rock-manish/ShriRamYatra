// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/Home';
import Login from './component/Login';
import PhoneLogin from './component/PhoneLogin';
import HomeScreen from './component/HomeScreen';
import AuthScreen from './component/AuthScreen';
import InputOtp from './component/InputOtp';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home}/> */}
        {/* <Stack.Screen name="Login" component={Login}/> */}
        {/* <Stack.Screen name="PhoneLogin" component={PhoneLogin}/> */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen}/> */}
        {/* <Stack.Screen name="InputOtp" component={InputOtp}/> */}
        <Stack.Screen name="AuthScreen" component={AuthScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;