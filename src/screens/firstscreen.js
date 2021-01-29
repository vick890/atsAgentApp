import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const Firstscreen = ({ navigation }) => {

  const [mobileNumber, setmobileNumber] = useState("")

  let login = () => {
    if (mobileNumber == '')
      alert('please fill value')
    else {
      navigation.navigate('Second');
    }
  }


  return (
    <View style={styles.container}>
      <Image style={styles.logo}
        source={require('../images/login-screen-design.png')}
      />
      <View style={{ position: 'absolute' }}>
          <Text style={styles.text1}>Enter Your Mobile Number</Text>
            <Text style={styles.text2}>We will send you one time</Text>
          <Text style={styles.text2}>password(OTP) </Text>
        <TextInput
          onChangeText={text => setmobileNumber(text)}
          value={mobileNumber}
          keyboardType={'phone-pad'}
          maxLength={10}
         placeholder='Enter Mobile Number'
          style={styles.txtInput}
        />
        <TouchableOpacity style={styles.btn}
          // onPress={() => navigation.navigate('Second')}
          onPress={login}

        >
          <Image
            source={require("../images/Icon-48.png")}

          // 

          />
        </TouchableOpacity>
      </View>


    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  text1: {
    marginTop: 200,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
  text2: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400'
  },
  txtInput: {
    width: 250,
    marginTop: 30,
    textAlign: 'center',
    fontSize: 13,
    borderColor: '#e3e6e4',
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  btn: {
    borderWidth: 1,
    width: 60,
    borderRadius: 50,
    padding: 5,
    marginTop: 70,
    marginLeft: 90
  }
});
export default Firstscreen;