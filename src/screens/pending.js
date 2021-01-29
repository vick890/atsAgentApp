import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function Pending() {
    return (
        <ScrollView>
            <View style={styles.todaycontainer}>
                <View style={{ width: '72%' }}>
                    <Text style={styles.todayname}>Rajesh Singh</Text>
                    <Text style={styles.todayplace}>Maya Nagar Road, Aya Nagar,</Text>
                    <Text style={styles.todayplace}>New Delhi, Delhi , India</Text>
                    <TouchableOpacity style={styles.btntoday}>
                        <Text style={styles.btntxt}>Pending</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.todaydate}>THU 5 MARCH</Text>
                    <Text style={styles.todaytime}>09:00 PM</Text>
                </View>
            </View>

            <View style={styles.todaycontainer}>
                <View style={{ width: '72%' }}>
                    <Text style={styles.todayname}>Mukesh Singh</Text>
                    <Text style={styles.todayplace}>Maya Nagar Road, Aya Nagar,</Text>
                    <Text style={styles.todayplace}>New Delhi, Delhi , India</Text>
                    <TouchableOpacity style={styles.btntoday}>
                        <Text style={styles.btntxt}>Pending</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.todaydate}>THU 5 MARCH</Text>
                    <Text style={styles.todaytime}>09:00 PM</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    todaycontainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        shadowColor: '#F3F3F3',
        borderColor: "#F3F3F3",
        padding: 15,
        justifyContent: 'space-between'
    },
    todayname: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    todayplace: {
        letterSpacing: 0.4,
        fontWeight: '600',
        color: '#959595',
        fontSize: 17,
        paddingTop: 7
    },
    btntoday: {
        backgroundColor: 'orange',
        borderRadius: 20,
        width: '80%',
        marginTop: 10
    },
    btntxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        padding: 5
    },
    todaydate: {
        fontSize: 15,
        fontWeight: '600',
        color: '#969696'
    },
    todaytime: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        // marginLeft:15
        textAlign:'center'
    }
})