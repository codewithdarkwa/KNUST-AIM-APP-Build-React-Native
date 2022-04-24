import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button, Avatar } from "react-native-elements";
import HeaderRef from "../components/HeaderRef";
import { useTheme } from "../hooks/ThemeContext";

const ReferenceScreen = ({ navigation }) => {
  const DarkTheme = useTheme();
  const themeStyles = {
    backgroundColor: DarkTheme ? "#121212" : "#fff",
  };

  const [StudentId, setStudentId] = useState("");

  const Login = () => {
    {
      StudentId.length == 0
        ? alert("Required filled missing")
        : navigation.replace("Login");
    }
  };
  const AvatarSrc = [
    {
      id: 1,
      src: require("../assets/img/results.png"),
    },
    {
      id: 2,
      src: require("../assets/img/registration.png"),
    },
    {
      id: 3,
      src: require("../assets/img/profile.png"),
    },
    {
      id: 4,
      src: require("../assets/img/notification.png"),
    },
    {
      id: 5,
      src: require("../assets/img/slip.png"),
    },
    {
      id: 6,
      src: require("../assets/img/user.png"),
    },
  ];
  return (
    <>
      <View style={themeStyles}>
        <HeaderRef />
        <View style={styles.container}>
          <Input
            style={styles.inputContainer}
            type="number"
            placeholder="Enter your student ID number"
            value={StudentId}
            keyboardType="numeric"
            secureTextEntry
            onChangeText={(number) => setStudentId(number)}
          />
          <Button
            title="NEXT"
            containerStyle={styles.btn}
            type="clear"
            onPress={Login}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 300,
          }}
        >
          {AvatarSrc.map((avatar) => (
            <Avatar
              size="small"
              rounded
              source={avatar.src}
              key={avatar.id}
              containerStyle={{ margin: 5, bottom: 50 }}
            />
          ))}
        </View>
      </View>
    </>
  );
};

export default ReferenceScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    padding: 15,
    width: 300,
    marginTop: 110,
  },
  btn: {
    backgroundColor: "#990000",
    width: 300,
    borderRadius: 20,
    margin: 15,
  },
});
