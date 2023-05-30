import { NavigationContainer } from "@react-navigation/native";
import ProductScreen from "./screens/ProductScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'white'}}}>
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({navigation})=>({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "400" }}>1</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
