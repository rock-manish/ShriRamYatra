// In App.js in a new project


import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/Home';
import Login from './component/Login';
import SignUp from './component/SignUp';
import PhoneLogin from './component/PhoneLogin';
// import HomeScreen from './component/HomeScreen';
import InputOtp from './component/InputOtp';
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';
import VerificationPage from './component/VerificationPage';
import Razerpay from './component/Razerpay';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="PhoneLogin" component={PhoneLogin}/>
        <Stack.Screen name="InputOtp" component={InputOtp}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="ResetPassword" component={ResetPassword}/>
        <Stack.Screen name="VerificationPage" component={VerificationPage}/> 
        <Stack.Screen name="Razerpay" component={Razerpay}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App