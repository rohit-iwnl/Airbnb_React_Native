import { StyleSheet, Text, View } from "react-native";
import React, { SetStateAction, useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";

import listingsData from '@/assets/data/airbnb-listings.json'

const Index = () => {

  const [category, setCategory] = useState("Apartments")

  const items = useMemo(() => listingsData as any,[])

  const onDataChanged = (category: string) => {
    console.log("Changed category to ",category)
    setCategory(category);
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged}/>,
        }}
      />
      <Listings listings={items} category={category}/>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
