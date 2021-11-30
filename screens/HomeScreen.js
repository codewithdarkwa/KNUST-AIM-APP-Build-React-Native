import React, { useLayoutEffect } from "react";
import { Icon, Card } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { useTheme, useThemeUpdate } from "../hooks/ThemeContext";

const HomeScreen = ({ navigation }) => {
  const DarkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: DarkTheme ? "#121212" : "#fff",
    txtColor: "#fff",
    icon: "#fff",
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "AIM",
      headerStyle: { backgroundColor: "#8b0000" },
      headerTitleStyle: { color: "#fff" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.toggleDrawer()}
          >
            <Icon name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: 60,
            marginRight: 0.5,
          }}
        >
          <TouchableOpacity activeOpacity={0.5} onPress={toggleTheme}>
            <Avatar source={require("../assets/img/logo.png")} size="small" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Reference")}
          >
            <Icon
              name="dots-three-vertical"
              size={20}
              color="#fff"
              type="entypo"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <>
      <ScrollView style={themeStyles}>
        <Card
          containerStyle={
            DarkTheme
              ? { backgroundColor: themeStyles.backgroundColor }
              : { backgroundColor: themeStyles.txtColor }
          }
        >
          <Card.Image source={require("../assets/img/image.jpeg")}></Card.Image>
        </Card>

        <Card
          containerStyle={
            DarkTheme
              ? { backgroundColor: themeStyles.backgroundColor }
              : { backgroundColor: themeStyles.txtColor }
          }
        >
          <Text
            style={
              DarkTheme
                ? { fontSize: 20, top: 15, color: themeStyles.txtColor }
                : {
                    fontSize: 20,
                    top: 15,
                    backgroundColor: themeStyles.backgroundColor,
                  }
            }
          >
            Quick Access
          </Text>
          <Icon
            name="dots-three-vertical"
            size={20}
            color={DarkTheme ? themeStyles.icon : "black"}
            type="entypo"
            style={{ left: 170, bottom: 2 }}
          />
          <Card.Divider />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              left: 30,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Avatar
                size="medium"
                rounded
                source={require("../assets/img/profile.png")}
              />
            </TouchableOpacity>
            <Text
              style={
                DarkTheme
                  ? { color: themeStyles.txtColor, top: 50, right: 50 }
                  : { color: "black", top: 50, right: 50 }
              }
            >
              Profile
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Results")}>
              <Avatar
                size="medium"
                rounded
                source={require("../assets/img/results.png")}
              />
            </TouchableOpacity>
            <Text
              style={
                DarkTheme
                  ? { color: themeStyles.txtColor, top: 50, right: 50 }
                  : { color: "black", top: 50, right: 50 }
              }
            >
              Results
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
            >
              <Avatar
                size="medium"
                rounded
                source={require("../assets/img/registration.png")}
              />
            </TouchableOpacity>
            <Text
              style={
                DarkTheme
                  ? { color: themeStyles.txtColor, top: 50, right: 50 }
                  : { color: "black", top: 50, right: 50 }
              }
            >
              Registration
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 45,
              left: 40,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
            >
              <Avatar
                size="medium"
                rounded
                source={require("../assets/img/notification.png")}
              />
            </TouchableOpacity>
            <Text
              style={
                DarkTheme
                  ? { color: themeStyles.txtColor, top: 50, right: 50 }
                  : { color: "black", top: 50, right: 50 }
              }
            >
              Notification
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Fees")}>
              <Avatar
                size="medium"
                rounded
                source={require("../assets/img/fees.png")}
              />
            </TouchableOpacity>
            <Text
              style={
                DarkTheme
                  ? { color: themeStyles.txtColor, top: 50, right: 50 }
                  : { color: "black", top: 50, right: 50 }
              }
            >
              Fees
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Course Materials")}
            >
              <Avatar
                size="medium"
                rounded
                source={require("../assets/img/slip.png")}
              />
            </TouchableOpacity>
            <Text
              style={
                DarkTheme
                  ? { color: themeStyles.txtColor, top: 50, right: 50 }
                  : { color: "black", top: 50, right: 50 }
              }
            >
              Course Materials
            </Text>
          </View>
        </Card>
        <Card
          containerStyle={
            DarkTheme
              ? { backgroundColor: themeStyles.backgroundColor }
              : { backgroundColor: themeStyles.txtColor }
          }
        >
          <Text
            style={
              DarkTheme
                ? { fontSize: 14, bottom: 10, color: themeStyles.txtColor }
                : { fontSize: 14, bottom: 10, color: "black" }
            }
          >
            Email
          </Text>
          <Text
            style={
              DarkTheme
                ? { fontSize: 20, bottom: 10, color: themeStyles.txtColor }
                : { fontSize: 20, bottom: 10, color: "black" }
            }
          >
            jnrdrkw1@gmail.com
          </Text>
          <Text
            style={
              DarkTheme
                ? { fontSize: 14, top: 10, color: themeStyles.txtColor }
                : { fontSize: 14, top: 10, color: "black" }
            }
          >
            Phone Number
          </Text>
          <Text
            style={
              DarkTheme
                ? { fontSize: 17, top: 10, color: themeStyles.txtColor }
                : { fontSize: 17, top: 10, color: "black" }
            }
          >
            0548153908
          </Text>
          <Text></Text>
          <Card.Divider />
          <Text
            style={
              DarkTheme
                ? { fontSize: 20, top: 10, color: themeStyles.txtColor }
                : { fontSize: 20, top: 10, color: "black" }
            }
          >
            Update contacts?
          </Text>
          <Text></Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Button color="red" title="YES" />
            <Button color="red" title="NO" />
          </View>
        </Card>
        <Card
          containerStyle={
            DarkTheme
              ? { backgroundColor: themeStyles.backgroundColor }
              : { backgroundColor: themeStyles.txtColor }
          }
        >
          <Text
            style={
              DarkTheme
                ? { fontSize: 25, bottom: 10, color: themeStyles.txtColor }
                : { fontSize: 25, bottom: 10, color: "black" }
            }
          >
            News
          </Text>
          <Card.Divider />
          <Text
            style={
              DarkTheme
                ? { fontSize: 18, bottom: 10, color: themeStyles.txtColor }
                : { fontSize: 18, bottom: 10, color: "black" }
            }
          >
            KNUST-SRC Climaxes 60th Aniversary Celebration: Donates 50 Laptops
            to Support SONSOL Project
          </Text>
          <Text
            style={
              DarkTheme
                ? { fontSize: 15, top: 5, color: themeStyles.txtColor }
                : { fontSize: 15, top: 5 }
            }
          >
            The Student Representative Council of the Kwame Nkrumah University
            of Science and Technology (KNUST-SRC) has donated 50 brand new
            laptop computers to brillant but needy students in KNUST.The
            presentation was held on...
          </Text>
          <Text></Text>
          <Card.Divider />
          <Text
            style={
              DarkTheme
                ? { fontSize: 18, bottom: 10, color: themeStyles.txtColor }
                : { fontSize: 18, bottom: 10, color: "black" }
            }
          >
            KNUST-SRC Climaxes 60th Aniversary Celebration: Donates 50 Laptops
            to Support SONSOL Project
          </Text>
          <Text
            style={
              DarkTheme
                ? { fontSize: 15, top: 5, color: themeStyles.txtColor }
                : { fontSize: 15, top: 5 }
            }
          >
            The Student Representative Council of the Kwame Nkrumah University
            of Science and Technology (KNUST-SRC) has donated 50 brand new
            laptop computers to brillant but needy students in KNUST.The
            presentation was held on...
          </Text>
          <Text></Text>
          <Card.Divider />
          <Text
            style={
              DarkTheme
                ? { fontSize: 18, bottom: 10, color: themeStyles.txtColor }
                : { fontSize: 18, bottom: 10, color: "black" }
            }
          >
            KNUST-SRC Climaxes 60th Aniversary Celebration: Donates 50 Laptops
            to Support SONSOL Project
          </Text>
          <Text
            style={
              DarkTheme
                ? { fontSize: 15, top: 5, color: themeStyles.txtColor }
                : { fontSize: 15, top: 5 }
            }
          >
            The Student Representative Council of the Kwame Nkrumah University
            of Science and Technology (KNUST-SRC) has donated 50 brand new
            laptop computers to brillant but needy students in KNUST.The
            presentation was held on...
          </Text>
          <Text></Text>
          <Card.Divider />
          <Text
            style={
              DarkTheme
                ? { fontSize: 15, top: 5, color: themeStyles.txtColor }
                : { fontSize: 15, top: 5 }
            }
          >
            KNUST-SRC Climaxes 60th Aniversary Celebration: Donates 50 Laptops
            to Support SONSOL Project
          </Text>
          <Text
            style={
              DarkTheme
                ? { fontSize: 15, top: 5, color: themeStyles.txtColor }
                : { fontSize: 15, top: 5 }
            }
          >
            The Student Representative Council of the Kwame Nkrumah University
            of Science and Technology (KNUST-SRC) has donated 50 brand new
            laptop computers to brillant but needy students in KNUST.The
            presentation was held on...
          </Text>
        </Card>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
