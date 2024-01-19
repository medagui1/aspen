import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { location, arrow } from "../icons";

const HomeHeader = () => {
  return (
    <View className="justify-between items-center flex-row">
      <Text className="text-lg">Explore</Text>
      <View className="flex-row gap-2 justify-between items-center">
        <Image source={location} />
        <Text>Aspen, USA</Text>
        <Image source={arrow} />
      </View>
    </View>
  );
};

export default HomeHeader;
