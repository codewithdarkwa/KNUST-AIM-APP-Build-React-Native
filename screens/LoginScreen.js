import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Input, Button, Avatar } from "react-native-elements";
import Loading from "../components/Loading";
import Header from "../components/header";

import { useTheme } from "../hooks/ThemeContext";

const LoginScreen = ({ navigation }) => {
  const DarkTheme = useTheme();
  const themeStyles = {
    backgroundColor: DarkTheme ? "#121212" : "#fff",
  };

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const Verify = () => {
    {
      username.length == 0 || password.length == 0
        ? alert("Required field is missing")
        : navigation.replace("AIM");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <SafeAreaView style={themeStyles}>
          <Header />
          <View style={styles.container}>
            <Input
              style={styles.inputContainer}
              type="text"
              placeholder="Username"
              value={username}
              autoFocus={true}
              onChangeText={(text) => setusername(text)}
            />
            <Input
              style={styles.inputContainer}
              type="password"
              placeholder="Password"
              value={password}
              autoFocus={true}
              secureTextEntry
              onChangeText={(text) => setpassword(text)}
            />
            <Button
              title="VERIFY"
              containerStyle={styles.btn}
              type="clear"
              onPress={Verify}
            />
            <View style={{ marginTop: 15 }} />
            <TouchableOpacity>
              <Text>Forget password?</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 200,
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
        </SafeAreaView>
      )}
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
    justifyContent: "center",
  },
  inputContainer: {
    padding: 10,
    width: 300,
    marginTop: 17,
  },
  btn: {
    backgroundColor: "#990000",
    width: 300,
    borderRadius: 20,
    color: "#fff",
  },
});
