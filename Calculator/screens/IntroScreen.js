import { StyleSheet, Text, View ,Image} from "react-native";
import React from "react";
import icon from "../assets/icon.png";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text>IntroScreen</Text>
        <Image source={icon} style={styles.innerImg} />
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8c2121ff",
    height: "100%",
    width: "100%",
    
  },
  inner: {
    width: 200,
    justifyContent: "center",
    alignItems: "center", 
  },
  innerImg: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
