import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HomeHeader from "../assets/components/HomeHeader";

import { location, arrow, search, star, heart } from "../assets/icons";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import SearchBox from "../assets/components/SearchBox";
import Tags from "../assets/components/Tags";
import PopularAttractions from "../assets/secions/PopularAttractions";
import Recommended from "../assets/secions/Recommended";

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

const Home = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tagSelected, setTagSelected] = useState(tags[0]);

  const { data, isLoading, error } = useFetch("attractions");

  const handleCardPress = (id) => {
    navigation.navigate('Details')
  }

  return (
    <SafeAreaView className="p-6 pt-12 text-[#232323]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <Text className="font-regular text-4xl mt-1 ml-[-12px]"> Aspen </Text>
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Tags
          tagSelected={tagSelected}
          setTagSelected={setTagSelected}
          tags={tags}
        />
        
        <PopularAttractions data={data?.slice(0, 5)} navigation={navigation} isLoading={isLoading} error={error}/>
        <Recommended data={data?.slice(6, 12)} navigation={navigation} isLoading={isLoading} error={error}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
