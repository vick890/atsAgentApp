import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';


const Secondscreen = ({navigation}) =>{

    const [otp, setOtp] = useState(['-', '-', '-', '-']);
    const [otpVal, setOtpVal] = useState('');


    let otpenter = () =>{
        navigation.navigate('Tab')
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.otpimage}
                source={require('../images/Icon-96.png')}
            />
            <Text style={styles.entCode}>Enter Code</Text>
            <Text style={styles.codeDigit1}>We have send you an SMS on 1234567890</Text>
            <Text style={styles.codeDigit2}>with 4 digit verification code</Text>

            <TextInput
                onChangeText={value => {
                    if (isNaN(value)) {
                        return;
                    }
                    if (value.length > 4) {
                        return;
                    }
                    let val =
                        value + '----'.substr(0, 4 - value.length);
                    let a = [...val];
                    setOtpVal(a);
                    setOtp(value);
                }}
                style={{ height: 0 }}
                autoFocus={true}
            />
            <View style={styles.otpBoxesContainer}>
                {[0, 1, 2, 3].map((item, index) => (
                    <Text style={styles.otpBox} key={index}>
                        {otp[item]}
                    </Text>
                ))}
            </View>
            <TouchableOpacity style={styles.btnnext}
                    onPress={otpenter}
            >
                        <Image
                            source={require("../images/Icon-48.png")}
                        />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    otpimage: {
        marginVertical: 100
    },
    entCode: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    codeDigit1: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '700',
        marginTop: 20,
    },
    codeDigit2: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '700'
    },

    otpBoxesContainer: {
        flexDirection: 'row'
    },
    otpBox: {
        padding: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#9c9c9c',
        height: 50,
        width: 50,
        textAlign: 'center',
        color: '#9c9c9c',
        borderRadius:5,
        marginTop:30
    },
    btnnext:{
        borderRadius:50,
        borderWidth:1,
        marginTop:50,
        padding:8,
        shadowRadius:50,
    }
});
export default Secondscreen;