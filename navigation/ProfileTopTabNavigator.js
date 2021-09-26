import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


import Programme from '../projects/Programme';
import Bio from '../projects/Bio';

const Tab = createMaterialTopTabNavigator();
const ProfileTopTabNavigator = () => {
    return (
       <Tab.Navigator>
            <Tab.Screen name="BIO" component={Bio}/>
            <Tab.Screen name="PROGRAMME" component={Programme}/>
       </Tab.Navigator>
    )
    }


export default ProfileTopTabNavigator;
