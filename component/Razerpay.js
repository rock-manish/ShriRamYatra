import { StyleSheet, Text, View, TextInput,Button,TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import RazorpayCheckout from 'react-native-razorpay';


  



const Razerpay = (e) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(null);
    const [email, setEmail] = useState('');
    const [num, setNum] = useState(null);
    const [invalid,setInvalid] = useState('');



        const Payment = () => {
      if(!name) {alert("Please Fill the detail")} else {
      
        var options = {
          description: 'Shri Ram Yatra donation camp',
          image: 'https://www.jagranimages.com/images/newimg/07042020/07_04_2020-shri_ram_logo_20172617.jpg',
          currency: 'INR',
          key: 'rzp_test_DA22h1CQSV6jNj', // Your api key
          amount: amount * 100,
          name: 'Pyra Pay',
          prefill: {
            email: email,
            contact: num,
            name: name,
          },
          theme: {color: '#F37254'},
        };
        RazorpayCheckout.open(options)
          .then(data => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          })
          .catch(error => {
            // handle failure
            // alert(`Error: ${error.code} | ${error.description}`);
            alert('payment failed');
          });
      }

      
       
      };
  
   
   


  return (
    
    <View style={{flex:1,backgroundColor:"#FF9933",paddingTop:40}}>
      <View style={{paddingLeft:20,alignContent:"flex-start"}}>
        <Text style={{fontSize:50,fontWeight:"bold"}}>Make </Text>
        <Text style={{fontSize:50,fontWeight:"bold",marginBottom:30}}>Payment</Text>
      </View>
      <View style={{alignItems:"center",}}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Name"
          keyboardType="numbers-and-punctuation"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="numbers-and-punctuation"
        />
        <TextInput
        maxLength={10}
          style={styles.input}
          onChangeText={setNum}
          value={num}
          placeholder="Mobile"
          keyboardType="numeric"
        />
        
        <TextInput
          style={styles.input}
          onChangeText={setAmount}
          value={amount}
          placeholder="Amount"
          keyboardType="numeric"
        />
      </View>
      <View style={{alignItems:"center",}}>
      <TouchableOpacity  onPress={ Payment}>
        <Text
        style={{margin: 30,
          elevation: 5,
          paddingHorizontal: 40,
          paddingVertical: 7,
          color: "orange",
          backgroundColor: "black",
          borderRadius: 40,
          fontSize: 30,
          fontWeight: "bold",
          fontFamily: "serif",}}
        >Pay</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
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


export default Razerpay;