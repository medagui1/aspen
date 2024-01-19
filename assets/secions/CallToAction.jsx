import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CallToAction = () => {
  return (
    <View className='flex-row justify-between items-center flex-wrap px-6 py-4 flex '>
      <View>
        <Text className='font-semibold'>Price</Text>
        <Text className='font-bold text-[#2dd7a4] text-3xl'>$199</Text>
      </View>
      <TouchableOpacity className='bg-[#176ff2] flex-1 ml-12 h-full justify-center items-center flex-row rounded-2xl'>
        <Text className='text-white font-bold text-lg'> Book Now </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CallToAction