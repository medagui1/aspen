import { View, TextInput, Image } from 'react-native'
import { search } from '../icons'

const SearchBox = ({searchTerm, setSearchTerm}) => {
  return (
    <View className="w-full mt-6 flex-row relative items-center">
        <TextInput
          className="bg-[#F3F8FE] py-4 px-12 rounded-full text-[#b8b8b8] w-full"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder="Find things to do"
        />
        <Image className="absolute left-4" source={search} />
      </View>
  )
}

export default SearchBox