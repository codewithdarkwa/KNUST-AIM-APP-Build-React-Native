import React from 'react'
import Bill from '../projects/Bill';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Transactions from '../projects/Programme';


const Tab = createMaterialTopTabNavigator();

const FeesTopTabNavigator = () => {
    return (
        <Tab.Navigator>
             <Tab.Screen name="Bill" component={Bill}/>
             <Tab.Screen name="Transactions" component={Transactions}/>
        </Tab.Navigator>
     ) 
}

export default FeesTopTabNavigator
