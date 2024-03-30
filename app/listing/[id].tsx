import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import listingsData from "@/assets/data/airbnb-listings.json";

import Animated from "react-native-reanimated";

import { ListingData } from "@/interfaces/Listings";

const { width } = Dimensions.get("window");

const DetailsPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const listing: ListingData = (listingsData as any[]).find(
    (item) => item.id === id
  );

  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.Image
          source={{
            uri: listing.xl_picture_url,
          }}
          style={styles.image}
        />
      </Animated.ScrollView>
    </View>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: 300,
    width: width,
  },
});
