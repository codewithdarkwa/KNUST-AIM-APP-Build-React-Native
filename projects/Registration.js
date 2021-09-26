import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'
const Registration = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
           title:"Registration",
           headerStyle:{backgroundColor:"#8b0000"},
           headerTitleStyle:{color:"#fff"},
           headerTintColor:"black",
           headerLeft: () =>(
            <View style={{marginLeft:20}}>
           <TouchableOpacity  activeOpacity={0.5} onPress={()=>navigation.toggleDrawer()}>
            <Icon name="menu" size={24} color="#fff"/>
            </TouchableOpacity>
           </View>
           ),
           })
    }, [navigation]) 

    return (
        <>
        <View style={styles.Reg}>
        <View style={styles.slip}>
        <Image source={require("../assets/img/slip.png")} style={{width:70,height:70,left:40,bottom:15}}/>
        <Text style={{bottom:15}}>Get Registration Slip</Text> 
        </View>
        <View style={styles.slip}>
        <Image source={require("../assets/img/slip.png")} style={{width:70,height:70,left:40,bottom:15}}/>
        <Text style={{bottom:15}}>Edit Registration</Text>  
        </View>           
        </View>
         <View style={styles.ins}>
         <Image source={require("../assets/img/slip.png")} style={{width:70,height:70,left:40,bottom:15}}/>
         <Text style={{bottom:20}}>Registration Instruction</Text>
     </View>
     </>
    )
}

export default Registration

const styles = StyleSheet.create({
    Reg:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
 slip:{
     padding:25,
     borderRadius:15,
     backgroundColor:"#fff",
     shadowOpacity:0.5,
     width:200,
     height:100,
     marginTop:100,
     left:10
 },
 ins:{
    padding:30,
    borderRadius:15,
    backgroundColor:"#fff",
    shadowOpacity:0.5,
    width:250,
    height:100,
    marginTop:50,
    left:10
 },

})
