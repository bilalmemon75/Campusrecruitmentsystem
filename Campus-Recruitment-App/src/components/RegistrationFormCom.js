import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  // Picker,
  Button,
} from "react-native";
// import * as ImagePicker from "expo-image-picker";
const RegistrationFormCom = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Registration</Text>
          <TextInput
            placeholder="Enter your full name"
            style={styles.inputStyle}
          />
          <TextInput placeholder="Enter your email" style={styles.inputStyle} />
          <TextInput
            placeholder="Enter your contact no"
            style={styles.inputStyle}
          />
          <TextInput placeholder="Enter your city" style={styles.inputStyle} />
          <TextInput
            placeholder="Enter your address"
            style={styles.inputStyle}
          />
          <TextInput placeholder="Enter your age" style={styles.inputStyle} />
          <TextInput
            placeholder="Enter your University/college"
            style={styles.inputStyle}
          />
          <TextInput placeholder="Enter aggregate" style={styles.inputStyle} />
          <TextInput
            placeholder="Enter year of passing"
            style={styles.inputStyle}
          />
          <TextInput placeholder="Enter Department" style={styles.inputStyle} />
          <TextInput placeholder="Enter username" style={styles.inputStyle} />
          {/* <Picker style={styles.pickerStyle}>
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="Fmale" />
          </Picker>

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
            />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View> */}

          <TextInput
            placeholder="Enter your password"
            style={styles.inputStyle}
          />

          <TouchableOpacity style={styles.btn}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

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
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderWidth: 1,
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
    marginBottom: 30,
  },
  heading: {
    fontSize: 50,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  pickerStyle: {
    height: 50,
    width: "95%",
    padding: 5,
    margin: 15,
  },
});
export default RegistrationFormCom;
