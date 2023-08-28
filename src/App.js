import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(false);

  return (
    <View>
      <Text style={Styles.textItem}>
        <b>Form</b>
      </Text>
      <TextInput
        placeholder="Enter your User Name"
        style={Styles.inputField}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Enter your Password"
        style={Styles.inputField}
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <TextInput
        placeholder="Enter your Email"
        style={Styles.inputField}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View>
        {display ? (
          <View>
            <Text style={{ marginTop: 10 }}>User Name: {name}</Text>
            <Text style={{ marginTop: 10 }}>Password: {password}</Text>
            <Text style={{ marginTop: 10 }}>Email: {email}</Text>
          </View>
        ) : null}
      </View>
      <View style={{ marginBottom: 10, marginTop: 10, spaceBetween: 5 }}>
        <Button title="submit" onPress={() => setDisplay(true)} />{" "}
      </View>
      <Button
        title="clear"
        onPress={() => [
          setName(""),
          setPassword(""),
          setEmail(""),
          setDisplay(false)
        ]}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  inputField: {
    fontSize: 20,
    color: "grey",
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 10,
    borderColor: "grey"
  },
  textItem: {
    fontSize: 30,
    textAlign: "center",
    color: "brown",
    marginTop: 20,
    padding: 15
  }
});
export default App;
