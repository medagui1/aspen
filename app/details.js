import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";
import { arrow, heart } from "../assets/icons";
import AttractionDetails from "../assets/components/AttractionDetails";
import Facilities from "../assets/secions/Facilities";
import CallToAction from "../assets/secions/CallToAction";

const Details = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { data, isLoading, error } = useFetch("attractions", itemId);

  return (
    <SafeAreaView className="text-[#232323]" style={{ flex: 1 }}>
      <View style={{ flex: 1 }} className=''>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
             {/* Attraction Image */}
          <View className="relative z-0">
            <ImageBackground
              className="h-[400px] rounded-b-[40px] p-6 pt-14  overflow-hidden "
              resizeMode="cover"
              source={{ uri: data?.attraction.coverimage }}
            >
              {/* The back button */}
              <TouchableOpacity
                className="rounded-lg bg-white  w-10 h-10 flex-row justify-center items-center"
                onPress={() => navigation.goBack()}
              >
                <Image source={arrow} className="rotate-90" />
              </TouchableOpacity>
              {/* The heart button */}
            </ImageBackground>
            <TouchableOpacity
              className="rounded-full bg-white p-4 z-50 flex-row justify-center items-center absolute bottom-0 right-0 mr-4 mb-[-28px] shadow "
              onPress={() => {}}
            >
              <Image source={heart} className="h-[24px] w-[24px]" />
            </TouchableOpacity>
          </View>
          {/* Attraction details */}
          <AttractionDetails data={data?.attraction} />
          <Facilities />

          
        </ScrollView>
      </View>
        <CallToAction />
    </SafeAreaView>
  );
};

export default Details;
