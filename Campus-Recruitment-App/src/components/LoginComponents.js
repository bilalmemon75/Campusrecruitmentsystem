import React, { Component, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
export default function LoginComponent() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Log in</Text>
          <TextInput placeholder="Enter your email" style={styles.inputStyle} />
          <TextInput
            placeholder="Enter your password"
            style={styles.inputStyle}
          />
          <TouchableOpacity style={styles.btn}>
            <Text>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text>if you haven't Account ? Register here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: "0px auto",
    width: "100%",
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
  },
  inputStyle: {
    padding: 20,
    textAlign: "center",
    borderRadius: 10,
    fontSize: "large",
    backgroundColor: "lightgrey",
    margin: 10,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 10,
    width: "95%",
    marginTop: 50,
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  heading: {
    fontSize: 50,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
