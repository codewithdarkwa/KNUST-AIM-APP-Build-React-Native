import React,{useLayoutEffect,useEffect,useState} from  'react';
import { Icon,Card, } from 'react-native-elements';
import { View,Text,StyleSheet,TouchableOpacity, ScrollView,Button} from "react-native";
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';


const HomeScreen =({navigation}) =>{
const [data, setData]=useState([]);
const [loading, setLoading]=useState(false);



useLayoutEffect(() => {
navigation.setOptions({
    title:"AIM",
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
headerRight: () => ( 
    <View style={{
      flexDirection:"row",
      justifyContent:"space-around",
      width:60,
      marginRight:0.5,
      
    }}>
      <TouchableOpacity activeOpacity={0.5} >
    <Avatar source={require("../assets/img/logo.png")} size="small" />
  </TouchableOpacity>
  <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Reference')}>
      <Icon name="dots-three-vertical" size={20} color="#fff" type="entypo"/>
  </TouchableOpacity>
           </View>
       )
    });
}, [navigation]) 

   
useEffect(() => {
  setTimeout(() => {
      setLoading(true);
  }, 2000);
},[])


  return (
    <>
    <ScrollView style={styles.container}>
    <Card>
       <Card.Image source={require("../assets/img/image.jpeg")}>

       </Card.Image>
    </Card>

  <Card>
    <Text style={{fontSize:20,top:15}}>Quick Access</Text>
        <Icon name="dots-three-vertical" size={20} color="black" type="entypo" style={{left:170,bottom:2}}/>
  <Card.Divider/>
  <View style={{flexDirection:"row",justifyContent:"space-around",left:30,}}>
  <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
  <Avatar size="medium" rounded source={require('../assets/img/profile.png')}/>
  </TouchableOpacity>
  <Text style={{top:50,right:50}}>Profile</Text>
  <TouchableOpacity onPress={()=>navigation.navigate('Results')}>
  <Avatar size="medium" rounded source={require('../assets/img/results.png')}/>
  </TouchableOpacity>
  <Text style={{top:50,right:50}}>Results</Text>
  <TouchableOpacity onPress={()=>navigation.navigate('Registration')}>
  <Avatar size="medium" rounded source={require('../assets/img/registration.png')}/>
  </TouchableOpacity>
  <Text style={{top:50,right:60}}>Registration</Text>
  </View>
  <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:45,left:40}}>
  <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
  <Avatar size="medium" rounded source={require('../assets/img/notification.png')} />
  </TouchableOpacity >
  <Text style={{top:50,right:50,}}>Notification</Text>
  <TouchableOpacity onPress={()=>navigation.navigate('Fees')}>
  <Avatar size="medium" rounded source={require('../assets/img/fees.png')}/>
  </TouchableOpacity>
  <Text style={{top:50,right:40}}>Fees</Text>
  <TouchableOpacity onPress={()=>navigation.navigate('Course Materials')}>
  <Avatar size="medium" rounded source={require('../assets/img/slip.png')}/>
  </TouchableOpacity>
  <Text style={{top:50,right:50}}>Course Materials</Text>
  </View>
  </Card>
  <Card>
    <Text style={{fontSize:14,bottom:10,color:"grey"}}>Email</Text>
    <Text style={{fontSize:20,bottom:10}}>jnrdrkw1@gmail.com</Text>
    <Text style={{fontSize:14,top:10,color:"grey"}}>Phone Number</Text>
    <Text style={{fontSize:17,top:10}}>0548153908</Text>
    <Text></Text>
  <Card.Divider/>
  <Text style={{fontSize:20,top:10}}>Update contacts?</Text>
  <Text></Text>
  <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
  <Button
color="red"
title='YES'/>
  <Button
color="red"
title='NO'/>
</View>
  </Card>
  <Card>
    <Text style={{fontSize:25,bottom:10}}>News</Text>
  <Card.Divider/>
  <Text style={{fontSize:18,bottom:10}}>
  KNUST-SRC Climaxes 60th Aniversary Celebration: Donates 50 Laptops to Support SONSOL Project
  </Text>
  <Text style={{fontSize:15,top:5}}>
  The Student Representative Council of the Kwame Nkrumah University of Science and Technology
  (KNUST-SRC) has donated 50 brand new laptop computers to brillant but needy students in KNUST.The 
  presentation was held on...
  </Text>
  <Text></Text>
  <Card.Divider/>
  <Text style={{fontSize:20,bottom:10}}>
  KNUST-SRC Climaxes 60th Aniversary Celebration: Donates 50 Laptops to Support SONSOL Project
  </Text>
  <Text style={{fontSize:15,top:5}}>
  The Student Representative Council of the Kwame Nkrumah University of Science and Technology
  (KNUST-SRC) has donated 50 brand new laptop computers to brillant but needy students in KNUST.The 
  presentation was held on...
  </Text>
  <Text></Text>
  <Card.Divider/>
  <Text style={{fontSize:18,bottom:10}}>
  KNUST-SRC Climaxes 60th Aniversary Celebration: Donates 50 Laptops to Support SONSOL Project
  </Text>
  <Text style={{fontSize:15,top:5}}>
  The Student Representative Council of the Kwame Nkrumah University of Science and Technology
  (KNUST-SRC) has donated 50 brand new laptop computers to brillant but needy students in KNUST.The 
  presentation was held on...
  </Text>
  <Text></Text>
  <Card.Divider/>
  <Text style={{fontSize:18,bottom:10}}>
  KNUST-SRC Climaxes 60th Aniversary Celebration: Donates 50 Laptops to Support SONSOL Project
  </Text>
<Text style={{fontSize:15,top:5}}>
  The Student Representative Council of the Kwame Nkrumah University of Science and Technology
  (KNUST-SRC) has donated 50 brand new laptop computers to brillant but needy students in KNUST.The 
  presentation was held on...
</Text>
  </Card>
  
</ScrollView>

</>
);

}

export default HomeScreen;

const styles = StyleSheet.create({
 
  });