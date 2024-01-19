import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RecommendedCard from '../components/RecommendedCard'

const Recommended = ({data}) => {
  return (
    <View className='mt-6'>
      <Text className='font-semibold text-2xl mb-4'>Recommended</Text>
      <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={{ columnGap : 16 }}
          renderItem={({ item }) => (
            <RecommendedCard  item={item} />
          )}
          showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default Recommended