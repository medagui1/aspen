import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import PopularAttractionCard from '../components/PopularAttractionCard'

const PopularAttractions = ({data, navigation}) => {
  return (
    <View className="mt-6">
        {/* Popular attraction title  */}

        <View className="flex-row justify-between items-center mb-4">
          <Text className="font-semibold text-2xl">Popular</Text>
          <TouchableOpacity>
            <Text className="text-[#176ff2] font-regular">See all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={{ columnGap : 16 }}
          renderItem={({ item }) => (
            <PopularAttractionCard item={item} navigation={navigation}/>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
  )
}

export default PopularAttractions