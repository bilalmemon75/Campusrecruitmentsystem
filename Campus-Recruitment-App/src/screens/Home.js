import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

const image = { uri: "http://pngimg.com/uploads/student/student_PNG62521.png" };

const Separator = () => <View style={styles.separator} />;

const Home = (props) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.text}>
          <Text style={styles.text}>Well Come To Our Campus</Text>
        </View>
      </ImageBackground>
    </View>
    {/* <View style={styles.card}>
      <Text style={{fontSize:32}}>
        Well Come!
      </Text>
    </View> */}

    <View>
      <Text style={styles.title}>Well Come Students.</Text>
      <Button title="Admin" />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>Students</Text>
      <Button
        title="Students"
        color="#f194ff"
        onPress={() => props.navigation.navigate("StudentList")}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>Companies</Text>
      <Button
        title="Company"
        color="#0F9D58"
        onPress={() => props.navigation.navigate("CompanyScreen")}
      />
    </View>
    <Separator />
    <View>
      {/* <Text style={styles.title}> */}
      {/* This layout strategy lets the title define the width of the button. */}
      {/* </Text> */}
      <View style={styles.fixToText}>
        <Button
          title="Log in"
          onPress={() => props.navigation.navigate("LoginScreen")}
        />
        <Button
          title="Register"
          onPress={() => props.navigation.navigate("RegistrationScreen")}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  card: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Home;
