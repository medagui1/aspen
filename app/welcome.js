import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import background from "../assets/images";

const Welcome = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={background}
        resizeMode="cover"
        className="w-full h-full"
      >
        <View className="p-8 flex items-start justify-end h-full ">
          <View className="max-w-[300px]">
            <Text className="text-white text-2xl mb-2 font-light">
              Plan your
            </Text>
            <Text className="text-white text-5xl">Luxurious Vacation</Text>
          </View>
            <TouchableOpacity className="bg-[#176ff2] w-full py-4 rounded-lg flex justify-center items-center mt-6" onPress={() => navigation.navigate('Home')}>
              <Text className="text-white font-bold text-md">Explore</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
