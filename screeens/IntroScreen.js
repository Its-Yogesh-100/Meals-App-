import { StyleSheet, Text, View } from "react-native";
import React from "react";
import icon from "../assets/icon.png";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>IntroScreen</Text>
        <Image source={icon} style={{ width: 100, height: 100 }} />
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
