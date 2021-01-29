import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Fourthscreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('../images/Profile-screen-design.jpg')}
            />
            <View style={{ position: 'absolute' }}>
                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 35, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Hots Leads</Text>
                    </View>
                    <View>
                        <Image source={require('../images/ATSNeed vendor icons/add agent/Icon-36.png')}
                            style={{ height: 20, width: 20, backgroundColor: '#fff', marginLeft: 15 }}
                        />
                        <Text style={styles.txtheder}>Alerts</Text>
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
                                <TouchableOpacity style={{ backgroundColor: '#31AAE2', borderRadius: 5 }}>
                                    <Text style={{
                                        fontWeight: 'bold', fontSize: 15, color: '#fff',
                                        letterSpacing: 1, padding: 9
                                    }}>Enter OTP</Text>
                                </TouchableOpacity>
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
    }
    ,
});
