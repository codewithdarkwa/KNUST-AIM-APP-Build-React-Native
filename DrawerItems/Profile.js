import React from 'react'
import { StyleSheet} from 'react-native'


import ProfileTopTabNavigator from '../navigation/ProfileTopTabNavigator'
import Profileheader from '../components/Profileheader'
const Profile = ({navigation}) => {


    return (
        <>
          <Profileheader/>
          <ProfileTopTabNavigator/>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({})
