import React from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import ReactNativeLoading from 'react-native-loading-spinner-overlay';

const Loading = () => {
    return (
         <View style={styles.loading}>

             <ReactNativeLoading 
            color="#fff"
            animation="slide"
            visible={true}
            size="large"
            // textContent="Loading..."
             />

         </View>
    
    
    )
}

export default Loading

const styles = StyleSheet.create({
    loading:{
        alignItems:"center",
        justifyContent:"center",
    }
})
