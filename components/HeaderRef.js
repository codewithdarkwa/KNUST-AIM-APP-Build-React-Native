
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  SafeAreaView,
} from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
const { width, height } = Dimensions.get("window");
const HeaderRef = () => {
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
            source={require("../assets/img/avatar.jpg")}
            containerStyle={{alignSelf:'center',top:20}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderRef;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: width,
    height: height / 4,
    backgroundColor: "#8b0000",
  },
  headerImg: {
    width: 150,
    height: 70,
    alignSelf:'center',
  },
});
