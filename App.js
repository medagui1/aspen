import Welcome from "./app/welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./app/home";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown : false }} >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
