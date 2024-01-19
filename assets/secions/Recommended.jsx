import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import RecommendedCard from '../components/RecommendedCard'

const Recommended = ({data, isLoading, error, navigation}) => {
  return (
    <View className='mt-6'>
      <Text className='font-semibold text-2xl mb-4'>Recommended</Text>
      {isLoading ? (
          <ActivityIndicator size="large" color={'#176ff2'} />
        ) : error ? (
          <Text> Something went wrong  </Text>
        ) : (
          <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={{ columnGap : 16 }}
          renderItem={({ item }) => (
            <RecommendedCard  item={item} navigation={navigation}/>
          )}
          showsHorizontalScrollIndicator={false}
        />
        )}
      
    </View>
  )
}

export default Recommended