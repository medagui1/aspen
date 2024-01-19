import { View, Text, Image } from 'react-native'
import React from 'react'
import { trend } from '../icons'

const RecommendedCard = ({item}) => {
  return (
    <View className='w-[174px] bg-[#176ff220] rounded-xl'>
      <Image 
      source={{ uri: item.coverimage }}
      resizeMode='cover'
      className='h-[102px] w-full rounded-xl'
      />
      <View className='px-3 py-2'>
        <Text className='font-semibold text-[14px]'>
            {item.name}
        </Text>
        <View className='flex-row gap-1 justify-start items-center'>
            <Image
            source={trend} />
        <Text className='text-[#3a544f] text-[12px]'>
            Hot Deal
        </Text>
        </View>
      </View>
    </View>
  )
}

export default RecommendedCard