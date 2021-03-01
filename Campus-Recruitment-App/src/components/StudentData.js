import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
// import image from "../../assets/";
export default function StudentData(props) {
  const [name, setName] = useState(props.name);
  const [img, setImg] = useState();
  const [education, setEducation] = useState(props.education);
  const [department, setDepartment] = useState(props.department);
  console.log(props.name);
  return (
    <>
      <View style={styles.main}>
        {/* <Image source={image} style={styles.imageStyle} /> */}
        <Text style={styles.nameStyle}>{name}</Text>
        <Text style={styles.deptStyle}>{department}</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text>Hire</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderColor: "lightgrey",
    width: "100%",
    borderRadius: 80,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    margin: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  nameStyle: {
    textAlign: "center",
    fontSize: 30,
    padding: 10,
  },
  deptStyle: {
    marginTop: 10,
    marginRight: 10,
    fontSize: "larger",
  },
  btn: {
    justifyContent: "flex-end",
    textAlign: "center",
    color: "white",
    width: "100%",
    fontSize: "large",
    padding: 10,
    marginRight: 100,
    backgroundColor: "#DB4437",
    borderBottomColor: "lightgrey",
    borderWidth: 1,
  },
});
