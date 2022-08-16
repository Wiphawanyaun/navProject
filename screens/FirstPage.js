import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

const FirstPage = ({ navigation, route }) => {
  const [inputText, setinputText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
      <Text style={styles.textStyle}>
        Please insert your name to pass it to second screen
      </Text>
      <TextInput
        multiline
        placeholder="Please text here"
        style={styles.textinputStyle}
        onChangeText={setinputText}
        value={inputText}
      />
      <Button
        title="Go Next"
        onPress={() => {
          navigation.navigate("Second Page", { input: inputText });
        }}
      />
    </View>
  );
};

export default FirstPage;

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
    fontSize: 16,
    marginBottom: 20
  },

  textinputStyle: {
    padding: 10,
    backgroundColor: "#E3E3E3",
    width: 300,
    marginBottom: 10
  },
});
