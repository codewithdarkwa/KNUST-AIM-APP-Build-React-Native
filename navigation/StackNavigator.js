import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import ReferenceScreen from '../screens/ReferenceScreen';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Payfees from '../projects/Payfees';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
       <Stack.Navigator>
           <Stack.Screen name="Reference" component={ReferenceScreen} options={{headerShown:false}}/>
           <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}}/>
           <Stack.Screen name="AIM" component={HomeScreen}/>
           <Stack.Screen name="Pay Fees" component={Payfees}
            options={{headerStyle:{backgroundColor:"#8b0000"},
            headerTitleStyle:{color:"#fff"}}}/>
       </Stack.Navigator>
    )
}

export default MainStackNavigator ;

