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
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
