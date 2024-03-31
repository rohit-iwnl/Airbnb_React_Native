import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

const Booking = () => {
  return (
    <BlurView intensity={35} style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{
          fontSize: 28,
        }}>Booking Page</Text>
      </View>
    </BlurView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'transparent',
    flex: 1,
  },
});
