import { View, Text, Image } from 'react-native'
import React from 'react'

const FacilityCard = ({item}) => {
  return (
    <View className='p-2  bg-[#176ff220] h-[80px] w-[80px] justify-center items-center flex-col  rounded-xl mr-4'>
        <Image 
        source={item.icon}/>
      <Text className='text-[#b8b8b8] mt-1'> {item.title} </Text>
    </View>
  )
}

export default FacilityCard