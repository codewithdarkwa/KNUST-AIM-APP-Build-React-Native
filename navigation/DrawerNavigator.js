import React from 'react';
import {View,SafeAreaView, Image, ImageBackground} from 'react-native'
import {FontAwesome,MaterialIcons,FontAwesome5} from 'react-native-vector-icons';
import { createDrawerNavigator, DrawerItemList, } from '@react-navigation/drawer';
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
import {useTheme,useThemeUpdate} from '../hooks/ThemeContext'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    const DarkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles ={
        backgroundColor: DarkTheme ? '#121212' : '#fff',
            txtColor: '#fff',
            icon: '#fff',
        }
    return (
        <Drawer.Navigator
        drawerContent ={(props)=>{
            return(
                <SafeAreaView>
                <ImageBackground source={require('../assets/img/Darkwa.jpg')} style={{
                    height:150,
                    width:280,
                    alignItems:'flex-start',
                    justifyContent: 'center',
                    backgroundColor:"cyan"
                }}>
                <Image  source={require('../assets/img/John.png')} style={{width:80,height:80,borderRadius:80/2,marginBottom:70}}/>
                </ImageBackground>
                <DrawerItemList {...props} />
                </SafeAreaView>
            )
        }}
        >
        <Drawer.Screen 
        name="Home" 
        component={MainStackNavigator}
        options={{
        headerShown:false,
         drawerIcon:({focused,size})=>(
       <FontAwesome name="home" size={25} color={DarkTheme ? themeStyles.icon : '#fff'}/>
            )}}/>
        <Drawer.Screen  
        name="Profile" 
        component={Profile}
        options={{
        headerShown:false,
        drawerIcon:({focused,size})=>(
        <FontAwesome name="user" size={25} color={DarkTheme ? themeStyles.icon : '#fff'}/>
        )
        }}/>
        <Drawer.Screen
         name="Registration" 
         component={Registration}
        options={{
        drawerIcon:({focused,size})=>(
        <FontAwesome5 name="file-invoice" size={25} color={DarkTheme ? themeStyles.icon : '#fff'}/>
            )}}/>
        <Drawer.Screen 
        name="Results" 
        component={Results}
        options={{
        drawerIcon:({focused,size})=>(
        <FontAwesome name="check-square" size={25}  color={DarkTheme ? themeStyles.icon : '#fff'} />
            )}}/>
        
        <Drawer.Screen 
        name="Fees" 
        component={Fees}
        options={{
        drawerIcon:({focused,size})=>(
         <FontAwesome name="money" size={25}  color={DarkTheme ? themeStyles.icon : '#fff'}/>
            )}}/>
        <Drawer.Screen name="Notifications" component={Notification}
        options={{
            drawerIcon:({focused,size})=>(
                <FontAwesome name="bell" size={25}  color={DarkTheme ? themeStyles.icon : '#fff'}/>
            ) }}/>
        
        <Drawer.Screen name="Course Materials" component={CourseMaterial} 
        options={{
            drawerIcon:({focused,size})=>(
                <FontAwesome name="file-text" size={25}  color={DarkTheme ? themeStyles.icon : '#fff'}/>
            )
            }}/>
    
        <Drawer.Screen
         name="Lecturer Assessment" 
         component={Lecturer_Assessment} 
        options={{
        drawerIcon:({focused,size})=>(
        <FontAwesome5 name="user-check" size={25}  color={DarkTheme ? themeStyles.icon : '#fff'}/>
            )}}/>
        <Drawer.Screen 
        name="Settings" 
        component={settings}
        options={{
            drawerIcon:({focused,size})=>(
                <FontAwesome name="cog" size={25}  color={DarkTheme ? themeStyles.icon : '#fff'}/>
            ) }}/>
        
        <Drawer.Screen 
        name="Help & Feedback" 
        component={Help_feedback}
         options={{
        drawerIcon:({focused,size})=>(
       <MaterialIcons name="help-center" size={25}  color={DarkTheme ? themeStyles.icon : '#fff'}/>
            )
         }}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator

