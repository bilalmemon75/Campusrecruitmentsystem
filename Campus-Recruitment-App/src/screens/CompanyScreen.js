import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import CompanyPost from "../components/CompanyPost";

export default function CompanyScreen() {
  return (
    <>
      <ScrollView>
        <CompanyPost name="Careem" />
        <CompanyPost name="ABtech" />
        <CompanyPost name="Shaheen Automotive" />
        <CompanyPost name="Thundra" />
        <CompanyPost name="Design solution" />
        <CompanyPost name="PC" />
        <CompanyPost name="A" />
        
      </ScrollView>
    </>
  );
}
