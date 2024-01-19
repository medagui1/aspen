import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";

const capitalizeFirstLetter = (str) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;


const Tags = ({ setTagSelected, tagSelected, tags }) => {
  return (
    <View className="mt-6">
      <FlatList
        data={tags}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`  p-4 rounded-full 
            ${
              tagSelected === item
                ? "bg-[#176ff220] text-[#176ff2]"
                : "text-[#b8b8b8]"
            }`}
            onPress={() => setTagSelected(item)}
          >
            <Text
              className={`
            ${
              tagSelected === item
                ? "text-[#176ff2] font-bold"
                : "text-[#b8b8b8]"
            }`}
            >
              {capitalizeFirstLetter(item)}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Tags;
