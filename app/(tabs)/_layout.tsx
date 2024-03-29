import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";

import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "poppins-sb",
        },
      }}
    >
      <Tabs.Screen
        name="Index"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Wishlist"
        options={{
          tabBarLabel: "Wishlist",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Trips"
        options={{
          tabBarLabel : "Trips",
          tabBarIcon : ( {color, size} ) => (
            <FontAwesome5 name='airbnb' color={color} size={size}/>
          )
        }}
      />

      <Tabs.Screen
        name="Inbox"
        options={{
          tabBarLabel : "Inbox",
          tabBarIcon : ({color,size}) => (
            <MaterialCommunityIcons name="message-outline" color={color} size={size} />
          )
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel : "Profile",
          tabBarIcon : ({color,size}) => <Ionicons name="person-outline" color={color} size={size} />
        }}
      />

    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
