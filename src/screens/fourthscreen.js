import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Container, Header, ScrollableTab, Tab, Tabs, Icon } from 'native-base';
import Today from './today';
import Tomorrow from './tomorrow';
import Pending from './pending';
import Cancelled from './cancelled';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FifthScreen() {
    return (
        <Container>
            <View style={{
                flexDirection: 'row', height: 80, backgroundColor: '#31AAE2',
                justifyContent: 'space-between'
            }}>
                <View>
                    <Text style={styles.ongoingtxt}>Ongoing</Text>
                </View>
                <View style={{ padding: 22 }}>
                    <Icon type="FontAwesome" name="bell" style={{ fontSize: 20, color: '#fff' }} />
                    <Text style={{ fontSize: 17, color: '#fff', paddingRight: 12 }}>Alert</Text>
                </View>
            </View>
            <Tabs tabBarUnderlineStyle={{ backgroundColor: '#007ACC' }} renderTabBar={() => <ScrollableTab />}>
                <Tab heading="ALL"
                    tabStyle={{ backgroundColor: 'white', color: '#9C9C9C' }}
                    activeTabStyle={{ backgroundColor: '#fff' }}
                    activeTextStyle={{ color: '#007ACC', fontWeight: 'bold', fontSize: 25 }}
                >

                    <View>
                    <Ionicons name="md-checkmark-circle" size={32} color="green" />
                    <Text>HEllo</Text>
                    </View>
                </Tab>
                <Tab heading="TODAY"
                    tabStyle={{ backgroundColor: 'white', color: '#9C9C9C' }}
                    activeTabStyle={{ backgroundColor: '#fff' }}
                    activeTextStyle={{ color: '#007ACC', fontWeight: 'bold', fontSize: 25 }}
                >
                    <Today />
                </Tab>
                <Tab heading="TOMORROW"
                    tabStyle={{ backgroundColor: 'white', color: '#9C9C9C' }}
                    activeTabStyle={{ backgroundColor: '#fff' }}
                    activeTextStyle={{ color: '#007ACC', fontWeight: 'bold', fontSize: 25 }}
                >
                    <Tomorrow />
                </Tab>
                <Tab heading="WEEk"
                    tabStyle={{ backgroundColor: 'white', color: '#9C9C9C' }}
                    activeTabStyle={{ backgroundColor: '#fff' }}
                    activeTextStyle={{ color: '#007ACC', fontWeight: 'bold', fontSize: 25 }}
                >
                    <Text>HEllo</Text>
                </Tab>
                <Tab heading="PENDING"
                    tabStyle={{ backgroundColor: 'white', color: '#9C9C9C' }}
                    activeTabStyle={{ backgroundColor: '#fff' }}
                    activeTextStyle={{ color: '#007ACC', fontWeight: 'bold', fontSize: 25 }}
                >
                    <Pending />
                </Tab>
                <Tab heading="CANCELLED"
                    tabStyle={{ backgroundColor: 'white', color: '#9C9C9C' }}
                    activeTabStyle={{ backgroundColor: '#fff' }}
                    activeTextStyle={{ color: '#007ACC', fontWeight: 'bold', fontSize: 25 }}
                >
                    <Cancelled />
                </Tab>
            </Tabs>
        </Container>
    );
}

const styles = StyleSheet.create({
    ongoingtxt: {
        fontSize: 22,
        fontWeight: '700',
        color: '#fff',
        letterSpacing: 1,
        padding: 20
    }
});
