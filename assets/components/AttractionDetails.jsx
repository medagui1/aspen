import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { star } from "../icons";

const AttractionDetails = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState(data?.detail || "N/A - No description is provided!");

  useEffect(() => {
    setText(data?.detail || "N/A - No description is provided!")
  }, [data])

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <View className="p-6 pt-8">
      {/* Attraction title */}
      <View className="flex-row justify-between items-end w-full">
        <Text className="font-semibold text-[26px] ">{data?.name}</Text>
        <TouchableOpacity>
          <Text className="text-[#176ff2] font-bold">Show map</Text>
        </TouchableOpacity>
      </View>
      {/* Attraction rating. It is hardcoded for now */}
      <View className="flex-row items-end gap-2">
        <Image source={star} />
        <Text className="text-[#b8b8b8]">4.5 (355 Reviews)</Text>
      </View>

      {/* Attraction detail */}
      <View className="mt-6">
        <Text className="text-[#3a544f] leading-[24px]" numberOfLines={expanded ? undefined : 3} ellipsizeMode="tail">
          {text}
        </Text>
        { !expanded && text.length > 150 && (
            <TouchableOpacity onPress={handleToggle} className='mt-2'>
                <Text className='text-[#176ff2] font-bold'>Read More</Text>
            </TouchableOpacity>
        ) }
      </View>
    </View>
  );
};

export default AttractionDetails;
