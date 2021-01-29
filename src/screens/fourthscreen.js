import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Container, Header, ScrollableTab, Tab, Tabs } from 'native-base';
import Today from './today';
import Tomorrow from './tomorrow';
import Pending from './pending';
import Cancelled from './cancelled';

export default function FifthScreen() {
    return (
        <Container style={{ backgroundColor: 'red'}}>
            {/* <Text>Hello</Text> */}
            <Tabs tabBarUnderlineStyle={{backgroundColor:'#007ACC'}}	 renderTabBar={() => <ScrollableTab />}>
                <Tab heading="ALL" 
                tabStyle={{backgroundColor:'white', color:'#9C9C9C'}}
                activeTabStyle={{backgroundColor: '#fff'}}
                activeTextStyle={{color: '#007ACC', fontWeight: 'bold',fontSize:25}}
                >
                    <Text>HEllo</Text>
                </Tab>
                <Tab heading="TODAY"
                tabStyle={{backgroundColor:'white', color:'#9C9C9C'}}
                activeTabStyle={{backgroundColor: '#fff'}}
                activeTextStyle={{color: '#007ACC', fontWeight: 'bold',fontSize:25}}
                >
                    <Today />
                </Tab>
                <Tab heading="TOMORROW"
                tabStyle={{backgroundColor:'white', color:'#9C9C9C'}}
                activeTabStyle={{backgroundColor: '#fff'}}
                activeTextStyle={{color: '#007ACC', fontWeight: 'bold',fontSize:25}}
                >
                    <Tomorrow/>
                </Tab>
                <Tab heading="WEEk"
                tabStyle={{backgroundColor:'white', color:'#9C9C9C'}}
                activeTabStyle={{backgroundColor: '#fff'}}
                activeTextStyle={{color: '#007ACC', fontWeight: 'bold',fontSize:25}}
                >
                    <Text>HEllo</Text>
                </Tab>
                <Tab heading="PENDING"
                tabStyle={{backgroundColor:'white', color:'#9C9C9C'}}
                activeTabStyle={{backgroundColor: '#fff'}}
                activeTextStyle={{color: '#007ACC', fontWeight: 'bold',fontSize:25}}
                >
                    <Pending />
                </Tab>
                <Tab heading="CANCELLED"
                tabStyle={{backgroundColor:'white', color:'#9C9C9C'}}
                activeTabStyle={{backgroundColor: '#fff'}}
                activeTextStyle={{color: '#007ACC', fontWeight: 'bold',fontSize:25}}
                >
                    <Cancelled/>
                </Tab>
            </Tabs>
        </Container>
    );
}

const styles = StyleSheet.create({

});
