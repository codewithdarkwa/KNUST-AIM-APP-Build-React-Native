import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  SafeAreaView,
} from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
const { width, height } = Dimensions.get("window");
const header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/img/aim.png")}
          style={styles.headerImg}
        />
        <View style={styles.headerAvatar}>
          <Avatar
            rounded
            size="xlarge"
            source={require("../assets/img/John.png")}
            containerStyle={{alignSelf:'center',top:20}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: height / 4,
    backgroundColor: "#8b0000",
  },
  headerImg: {
    width: 150,
    height: 70,
    alignSelf:'center',
  },
});
