import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Firstscreen from '../screens/firstscreen';
import Secondscreen from '../screens/secondscreen';
import ThirdScreen from '../screens/thirdscreen';
import Fourthscreen from '../screens/fourthscreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const tintColor = 'red';

function StackScreens(){
  return(
    <Tab.Navigator
    tabBarOptions={{
      showIcon: true ,
      // showLabel:false,
      activeTintColor: '#31AAE2',
      inactiveTintColor: '#797C7B',
      tabStyle:{backgroundColor:'#FDFDFD', marginBottom:10},
      labelStyle: {fontSize: 11, fontWeight:'bold'}
       }}
       >        
      {/* <Stack.Screen name="First" component={Firstscreen} />
      <Stack.Screen name="Second" component={Secondscreen} />   */}
      <Tab.Screen name="New" component={ThirdScreen} 
      options={{
        tabBarIcon: (tintColor ) => (
          <Ionicons name="flame" size={20} color={tintColor}/>
        ),
      }}
      
      />
      <Tab.Screen  name="Ongoing" component={Fourthscreen}
      options={{
        tabBarIcon: (tintColor) => (
          <Ionicons name="book" size={20} color={tintColor}/>
        ),
      }}
      />
    </Tab.Navigator>
  )
}

export default function Route() {
  return (
    <NavigationContainer>
        <Stack.Navigator headerMode='none'>
        {/* <Stack.Screen name="Home" component={StackScreens} />     */}
      <Stack.Screen name="First" component={Firstscreen} />
      <Stack.Screen name="Second" component={Secondscreen} />
      <Stack.Screen  name="Tab" component={StackScreens} />
      {/* <Stack.Screen name="Fourth" component={Fourthscreen} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}


// function HomeTabs() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Feed" component={Feed} />
//         <Tab.Screen name="Notifications" component={Notifications} />
//       </Tab.Navigator>
//     );
//   }
  
//   function App() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeTabs} />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="Settings" component={Settings} />
//       </Stack.Navigator>
//     );
//   }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab:{
    fontSize:20
  }
});