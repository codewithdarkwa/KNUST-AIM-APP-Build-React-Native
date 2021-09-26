import React, {useLayoutEffect,useState,useEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import {ListItem,Icon} from 'react-native-elements'
import Loading from '../components/Loading';

const Course_Material = ({navigation}) => {
const [loading,setLoading]=useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
           title:"Course Materials",
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

    useEffect(()=>{
       setTimeout(()=>{
        setLoading(true);
    },2000)
    },[])
    return (
        <>
        {
            !loading? <Loading/>:
        <ScrollView style={styles.container}>
            <ListItem bottomDivider>
            <Text style={{fontSize:20,color:"grey",}}>Select a course to view related files</Text>
            </ListItem>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>ECON 152 ELEMENTS OF ECONOMICS II</ListItem.Title>
                    <ListItem.Subtitle>2020/2021 Second Semester, Year 1</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>CSM 158 PROGRAMMING WITH C++</ListItem.Title>
                    <ListItem.Subtitle>2020/2021 Second Semester, Year 1</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>MATH 162 INTRODUCTORY PURE MATHEMATICS</ListItem.Title>
                    <ListItem.Subtitle>2020/2021 Second Semester, Year 1</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>MATH 166 INTRODUCTION TO PROBABILITY AND STATISTICS</ListItem.Title>
                    <ListItem.Subtitle>2020/2021 Second Semester, Year 1</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>CSM 166 DISCRETE MATHEMATICS FOR COMPUTER SCIENCE II</ListItem.Title>
                    <ListItem.Subtitle>2020/2021 Second Semester, Year 1</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>CSM 152 INFORMATION TECHNOLOGY II</ListItem.Title>
                    <ListItem.Subtitle>2020/2021 Second Semester, Year 1</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>COMMUNICATION SKILLS II</ListItem.Title>
                    <ListItem.Subtitle>2020/2021 Second Semester, Year 1</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </ScrollView>
}
        </>
    )
}

export default Course_Material

const styles = StyleSheet.create({
    container: {
        marginTop:5
    }
})
