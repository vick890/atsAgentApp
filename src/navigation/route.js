import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Firstscreen from '../screens/firstscreen';
import Secondscreen from '../screens/secondscreen';
import ThirdScreen from '../screens/thirdscreen';
import Fourthscreen from '../screens/fourthscreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreens(){
  return(
    <Tab.Navigator>        
      {/* <Stack.Screen name="First" component={Firstscreen} />
      <Stack.Screen name="Second" component={Secondscreen} />   */}
      <Tab.Screen  name="New" component={ThirdScreen} />
      <Tab.Screen  name="Ongoing" component={Fourthscreen} />
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
      <Stack.Screen name="Tab" component={StackScreens} />
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
});