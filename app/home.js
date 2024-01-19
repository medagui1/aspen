import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HomeHeader from "../assets/components/HomeHeader";

import { location, arrow, search } from "../assets/icons";
import { useState } from "react";

const tags = [
  "location",
  "hotel",
  "food",
  "adventure",
  "travel",
  "exploration",
  "destination",
  "cuisine",
  "excursion",
];

const capitalizeFirstLetter = (str) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tagSelected, setTagSelected] = useState(tags[0]);

  return (
    <SafeAreaView className="p-6 pt-12">
      {/* Home header and the location */}

      <View className="justify-between items-center flex-row">
        <Text className="text-lg">Explore</Text>
        <View className="flex-row gap-2 justify-between items-center">
          <Image source={location} />
          <Text>Aspen, USA</Text>
          <Image source={arrow} />
        </View>
      </View>
      <Text className="font-regular text-4xl mt-2">Aspen</Text>

      {/* search input */}

      <View className="w-full mt-8 flex-row relative items-center">
        <TextInput
          className="bg-[#F3F8FE] py-4 px-12 rounded-full text-[#b8b8b8] w-full"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder="Find things to do"
        />
        <Image className="absolute left-4" source={search} />
      </View>

      {/* Tags */}
      <View className='my-8'>
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
    </SafeAreaView>
  );
};

export default Home;
