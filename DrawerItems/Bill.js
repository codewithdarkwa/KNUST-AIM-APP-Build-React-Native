import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,Dimensions} from 'react-native'
import {Button} from "react-native-elements";

const {width}= Dimensions.get("window");
const Bill = ({navigation}) => {

    return (
        <View style={{alignItems: 'center',justifyContent: 'center'}}>
       <Button onPress={()=>navigation.navigate("Pay Fees")} title="PAY FEES" type="clear" containerStyle={styles.button}/>
        </View>
    )
}

export default Bill

const styles = StyleSheet.create({
    button:{
        width:width,
        borderRadius:20,
        color:"white",
        backgroundColor:"#990000",
        marginTop:570
    }
})
