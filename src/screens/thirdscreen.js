import React, { useState } from 'react';
import {
    Text, View, StyleSheet, Image, TouchableOpacity, Modal, TouchableHighlight,
    TextInput
} from 'react-native';
import {Icon} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


export default function Fourthscreen() {

    const [modalVisible, setModalVisible] = useState(false);
    const [otp, setOtp] = useState(['-', '-', '-', '-']);
    const [otpVal, setOtpVal] = useState('');
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('../images/Profile-screen-design.jpg')}
            />
            <View style={{ position: 'absolute' }}>
                <View style={{ flex: 1, flexDirection: 'row', padding:20, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Hots Leads</Text>
                    </View>
                    {/* <View> */}
                        {/* <Image source={require('../images/ATSNeed vendor icons/add agent/Icon-36.png')}
                            style={{ height: 20, width: 20, backgroundColor: '#fff', marginLeft: 15 }}
                        /> */}
                        {/* <Text style={styles.txtheder}>Alerts</Text> */}
                    {/* </View> */}

                    <View>
                    <Icon type="FontAwesome" name="bell" style={{ fontSize: 20, color: '#fff' }} />
                    <Text style={{ fontSize: 16, color: '#fff', paddingRight:11, marginRight:17}}>Alert</Text>
                </View>

                    
                </View>

                <ScrollView>
                    <View style={{
                        flex: 1, flexDirection: 'column', backgroundColor: '#F4F4F4',
                        margin: 10, borderRadius: 10
                    }}>

                        <View style={{ backgroundColor: '#88C4D6', height: 50 }}>
                            <Text style={{ padding: 16, fontSize: 16, fontWeight: 'bold' }}>New Leads</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ width: '71%', padding: 15 }}>
                                <Text style={{ fontWeight: '700', fontSize: 22 }}>Naveen M.</Text>
                                <Text style={{ fontWeight: '600', fontSize: 18, paddingTop: 10 }}>Sun 9 Feb,
                            <Text style={{ fontWeight: 'bold' }}> 9:00 AM</Text>
                                </Text>
                                <Text style={{ fontWeight: '600', fontSize: 16, paddingTop: 10, color: '#919191' }}>P-95, Silver Crest Villas</Text>
                                <Text style={{ fontWeight: '600', fontSize: 16, paddingTop: 6, color: '#919191' }}>Sohana- Gurgaon Rd, Parsvanath Greenville, Tatvam Villas uppal</Text>
                                <Text></Text>
                            </View>
                            <View style={{ marginTop: 80 }}>
                                <TouchableOpacity style={{ backgroundColor: '#31AAE2', borderRadius: 5 }}
                                    onPress={() => {
                                        setModalVisible(true);
                                    }}
                                >
                                    <Text style={{
                                        fontWeight: 'bold', fontSize: 15, color: '#fff',
                                        letterSpacing: 1, padding: 9
                                    }}>Enter OTP</Text>
                                </TouchableOpacity>



                                <View style={styles.centeredView}>
                                    <Modal
                                        animationType="fade"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            Alert.alert("Modal has been closed.");
                                        }}
                                    >
                                        <View style={styles.centeredView}>
                                            <View style={styles.modalView}>

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



                                                <TouchableHighlight
                                                    onPress={() => {
                                                        setModalVisible(!modalVisible);
                                                    }}
                                                >
                                                    <Text style={styles.textStyle}>Hide Modal</Text>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </Modal>
                                </View>




                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    txtheder: {
        paddingTop: 10,
        paddingLeft: 10,
        color: "#fff",
        fontWeight: '600'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        // margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 250,
        width: 300
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
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
        borderRadius: 5,
        marginTop: 30
    },
});
