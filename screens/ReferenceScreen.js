import React, { useState, useEffect } from "react";
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
    // if (StudentId.length == 0) {
    //   alert("Required Field is missing");
    // } else navigation.replace("Login");
  };

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
            marginTop: 320,
          }}
        >
          <Avatar
            size="small"
            rounded
            source={require("../assets/img/results.png")}
          />
          <Avatar
            size="small"
            rounded
            source={require("../assets/img/registration.png")}
          />
          <Avatar
            size="small"
            rounded
            source={require("../assets/img/profile.png")}
          />
          <Avatar
            size="small"
            rounded
            source={require("../assets/img/notification.png")}
          />
          <Avatar
            size="small"
            rounded
            source={require("../assets/img/slip.png")}
          />
          <Avatar
            size="small"
            rounded
            source={require("../assets/img/user.png")}
          />
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
  },
});
