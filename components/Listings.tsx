import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { defaultStyles } from "@/constants/styles";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { ListingData } from "@/interfaces/Listings";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated'

interface Props {
  listings: any[];
  category: string;
}

export default function Listings({ listings: items, category }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    console.log("Reload Listing", category);
    console.log(items.length);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<ListingData> = ({ item }) => {
    if (!item.xl_picture_url || item.xl_picture_url === "") {
      return null;
    }

    // If xl_picture_url exists, render the component
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeOutLeft}>
            <Image
              source={{
                uri: item.xl_picture_url,
              }}
              style={styles.image}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 30,
                top: 30,
              }}
            >
              <Ionicons name="heart-outline" size={24} color={"#000"} />
            </TouchableOpacity>

            <View style={styles.listingBottomDetails}>
              <View
                style={{
                  flexDirection: "column",
                  paddingVertical: 12,
                  gap: 10,
                  maxWidth: "80%",
                }}
              >
                <Text
                  style={{
                    fontFamily: "poppins-sb",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: Colors.dark,
                    fontFamily: "poppins-sb",
                  }}
                >
                  {item.smart_location}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                }}
              >
                <Ionicons name="star" size={10} />
                <Text
                  style={{
                    fontFamily: "poppins-sb",
                  }}
                >
                  {item.review_scores_rating / 20}
                </Text>
              </View>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View style={defaultStyles.container}>
      <FlatList
        ref={listRef}
        renderItem={renderRow}
        data={isLoading ? [] : items}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius : 12,
  },
  listingBottomDetails: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 2,
  },
}); 
