import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SecondPage = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
      <Text style={styles.textStyle}>
        Values passed from First page: {route.params?.input}
      </Text>
    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20
  },

  heading: {
    fontSize: 25,
    textAlign: "center",
    padding: 10
  },

  textStyle: {
    textAlign: "center",
    fontSize: 16
  },
});
