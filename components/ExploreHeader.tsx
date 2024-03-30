import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";

import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

import * as Haptics from "expo-haptics";

const categories = [
  {
    name: "Apartments",
    icon: "home",
  },
  {
    name: "Condos",
    icon: "house-siding",
  },
  {
    name: "Condos",
    icon: "videogame-asset",
  },
  {
    name: "Trending",
    icon: "local-fire-department",
  },
  {
    name: "City",
    icon: "apartment",
  },
  {
    name: "Beachfront",
    icon: "beach-access",
  },
  {
    name: "Countryside",
    icon: "nature-people",
  },
];

interface Props {
  onCategoryChanged: (category: string) => void;
}

const ExploreHeader = ({ onCategoryChanged }: Props) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const selectCategory = (index: number) => {
    const selectedItem = itemsRef.current[index];
    setActiveIndex(index);

    selectedItem?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 14, y: 0, animated: true });
    });

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChanged(categories[index].name);
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
      }}
      edges={[
        'top','left','right'
      ]}
    >
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={"/(modals)/booking"} asChild>
            <TouchableOpacity style={styles.searchButton}>
              <Ionicons name="search" size={24} />
              <View>
                <Text
                  style={{
                    fontFamily: "poppins-sb",
                  }}
                >
                  Where to?
                </Text>
                <Text
                  style={{
                    fontFamily: "poppins",
                  }}
                >
                  Anywhere / Any week
                </Text>
              </View>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={24} />
          </TouchableOpacity>
        </View>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            gap: 24,
            paddingHorizontal: 16,
          }}
        >
          {categories.map((category, idx) => (
            <TouchableOpacity
              key={idx}
              ref={(el) => (itemsRef.current[idx] = el)}
              style={
                activeIndex === idx
                  ? styles.categoryButtonActive
                  : styles.categoryButton
              }
              onPress={() => selectCategory(idx)}
            >
              <MaterialIcons
                name={category.icon as any}
                size={24}
                color={activeIndex === idx ? Colors.primary : Colors.secondary}
              />
              <Text
                style={
                  activeIndex === idx
                    ? styles.categoryTextActive
                    : styles.categoryText
                }
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 140,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 10,
  },
  filterButton: {
    padding: 8,
    borderWidth: 2,
    borderColor: Colors.secondary,
    borderRadius: 24,
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderColor: "#c2c2c2",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 32,
    padding: 12,
    backgroundColor: "#fff",
    elevation: 2,
    flex: 1,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  categoryText: {
    fontSize: 14,
    fontFamily: "poppins-sb",
    color: Colors.secondary,
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: "poppins-sb",
    color: Colors.dark,
  },
  categoryButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
  },
  categoryButtonActive: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
});
