import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const MainScreen = () => {
  return (
    <View style={styles.main_screen}>
      <ScrollView style={styles.scroll_view}>
        <Text style={styles.main_screen_display_text}>MainScreen</Text>
      </ScrollView>

      <View style={styles.main_keypad}>
        <View style={styles.keypad_row}>
          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>AC</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>+</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>/</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>%</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.keypad_row}>
          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>7</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>8</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>9</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>/</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.keypad_row}>
          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>7</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>8</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>9</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>/</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.keypad_row}>
          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>7</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>8</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>9</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>/</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.keypad_row}>
          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>7</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>8</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>9</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg_button}>/</Text>
            </View>
          </Pressable>
        </View>


      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({

  main_screen: {
   
    marginTop: 50,
   display: "flex",
   flexDirection: "column",
   justifyContent: "space-between",
   alignItems: "center",
   height: "100%",
   width: "100%",
  },

  scroll_view: {
    elevation: 10,
    width: "95%",
    backgroundColor:"white",
    borderRadius:10,
    display:"flex",
    marginBottom:10,
    padding:10,
  },
  main_screen_display_text: {
    fontSize: 50,
    textAlign: "right",
    color: "black",
  },

  main_keypad: {
    width: "100%",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    
    alignItems: "center",
    
  },
  keypad_row: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fcb6b6ff",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  btn1_outer: { 
    width: 90,
    height: 90,
    backgroundColor:'yellow',
    elevation: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30
  }

});
