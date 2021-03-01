import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

function CompanyPost(props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.dis}>
          We invite candidates for interview call at {props.name}..!!
        </Text>
        <Button title="Check" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    borderColor: "lightgrey",
    borderWidth: 1,
    marginTop: 100,
  },
  name: {
    borderWidth: 1,
    borderColor: "lightgrey",
    textAlign: "center",
    fontSize: "larger",
    padding: 10,
  },
  dis: {
    fontSize: "large",
    padding: 10,
    textAlign: "center",
    marginBottom: 100,
  },
});
export default CompanyPost;
