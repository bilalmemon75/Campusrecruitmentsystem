import React from "react";
import { View, Text, ScrollView } from "react-native";
import StudentData from "../components/StudentData";
function StudentList() {
  return (
    <>
      <ScrollView>
        <StudentData name="Abubakar" mail="abubakar99@gmail.com" department="Civil" />
        <StudentData name="Rohail" mail="Rohail@gmail.com" department="Computer" />
        <StudentData name="Manoj" mail="manoj@gmail.com" department="Mechanical" />
        <StudentData name="Akhtar" mail="akhtar@gmail.com" department="SE" />
        <StudentData name="Jabbar" mail="rajarjabu@gmail.com" department="Biomedical" />
        <StudentData name="Waqar" mail="raeeswaqar@gmail.com" department="SE" />
        <StudentData name="Niaz" mail="aliniaz@gmail.com" department="ZOO" />
        <StudentData name="Asim" mail="asim134@gmail.com" department="SE" />
      </ScrollView>
    </>
  );
}

export default StudentList;
