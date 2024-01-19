import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import HomeHeader from "../assets/components/HomeHeader";

import { location, arrow, search } from "../assets/icons";
import { useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
    </SafeAreaView>
  );
};

export default Home;
