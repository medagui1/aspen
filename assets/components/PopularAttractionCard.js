import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { heart, star } from "../icons";

const PopularAttractionCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', {itemId : item.id})}>
        <View className=" h-[240px] w-[190px] rounded-[24px]  ">
      <ImageBackground
        source={{ uri: item.coverimage }}
        resizeMode="cover"
        style={{ backgroundColor: "black" }}
        className="w-full h-full overflow-hidden rounded-[24px] relative"
      >
        <View  className='absolute  top-0 h-full w-full'>
          {/* The attration name */}
          <View className="flex-col justify-end items-start h-full p-4">
            <View className="px-3 py-2 bg-[#4D5652] rounded-full">
              <Text className="text-white text-[12px] font-semibold">
                {item.name}
              </Text>
            </View>

            {/* The attration rating and favorite button */}
            <View className="flex-row justify-between items-center w-full mt-1">
              <View className=" bg-[#4D5652] flex-row rounded-l-full rounded-r-full justify-center items-center px-3 py-2">
                <Image source={star} />
                <Text className="text-white text-[10px] font-semibold ml-2">
                  4.1
                </Text>
              </View>
              <TouchableOpacity className="rounded-full bg-white p-2">
                <Image source={heart} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
    </TouchableOpacity>
  );
};


export default PopularAttractionCard;
