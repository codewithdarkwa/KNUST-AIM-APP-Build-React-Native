import React from 'react';
import {FontAwesome,MaterialIcons,FontAwesome5} from 'react-native-vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNavigator from './StackNavigator';
import Profile from '../projects/Profile';
import Registration from '../projects/Registration';
import Results from '../projects/Results';
import Fees from '../projects/Fees';
import Notification from '../projects/Notification';
import CourseMaterial from '../projects/Course_Material';
import Lecturer_Assessment from '../projects/Lecturer_Assessment';
import settings from '../projects/settings';
import Help_feedback from '../projects/Help_feedback';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
        <Drawer.Screen 
        name="Home" 
        component={MainStackNavigator}
        options={{
        headerShown:false,
         drawerIcon:({focused,size})=>(
       <FontAwesome name="home" size={25}/>
            )}}/>
        <Drawer.Screen  
        name="Profile" 
        component={Profile}
        options={{
        headerShown:false,
        drawerIcon:({focused,size})=>(
        <FontAwesome name="user" size={25}/>
        )
        }}/>
        <Drawer.Screen
         name="Registration" 
         component={Registration}
        options={{
        drawerIcon:({focused,size})=>(
        <FontAwesome5 name="file-invoice" size={25}/>
            )}}/>
        <Drawer.Screen 
        name="Results" 
        component={Results}
        options={{
        drawerIcon:({focused,size})=>(
        <FontAwesome name="check-square" size={25}/>
            )}}/>
        
        <Drawer.Screen 
        name="Fees" 
        component={Fees}
        options={{
        drawerIcon:({focused,size})=>(
         <FontAwesome name="money" size={25}/>
            )}}/>
        <Drawer.Screen name="Notifications" component={Notification}
        options={{
            drawerIcon:({focused,size})=>(
                <FontAwesome name="bell" size={25}/>
            ) }}/>
        
        <Drawer.Screen name="Course Materials" component={CourseMaterial} 
        options={{
            drawerIcon:({focused,size})=>(
                <FontAwesome name="file-text" size={25}/>
            )
            }}/>
    
        <Drawer.Screen
         name="Lecturer Assessment" 
         component={Lecturer_Assessment} 
        options={{
        drawerIcon:({focused,size})=>(
        <FontAwesome5 name="user-check" size={25}/>
            )}}/>
        <Drawer.Screen 
        name="Settings" 
        component={settings}
        options={{
            drawerIcon:({focused,size})=>(
                <FontAwesome name="cog" size={25}/>
            ) }}/>
        
        <Drawer.Screen 
        name="Help & Feedback" 
        component={Help_feedback}
         options={{
        drawerIcon:({focused,size})=>(
       <MaterialIcons name="help-center" size={25}/>
            )
         }}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator

