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
              marginTop: 270,
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
        </SafeAreaView>
      )}
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 60,
    justifyContent: "center",
    width: "100%",
    height: "100%",
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
    margin: 10,
  },
});
