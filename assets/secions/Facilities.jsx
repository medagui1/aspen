import { View, Text, ScrollView } from "react-native";
import React from "react";
import facilities from "../constants/facilities";
import FacilityCard from "../components/FacilityCard";

const Facilities = () => {
  return (
    <View className="px-6">
      <View className='w-full'>
        <Text className="text-2xl font-semibold mb-4">Facilities</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className=" flex-row justify-center items-center">
        {facilities.map((item) => (
            <FacilityCard item={item} key={item.title} />
          ))}
      </View>
      </ScrollView>
    </View>
  );
};

export default Facilities;
