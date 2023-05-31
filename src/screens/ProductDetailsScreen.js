import {
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/CartSlice";
import { useNavigation } from "@react-navigation/native";

const ProductDetailsScreen = () => {
  const { width } = useWindowDimensions();
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch =useDispatch();
  const navigation =useNavigation();

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({product}));
    navigation.navigate("Cart")
  };

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product?.images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image
              style={{ width: width, aspectRatio: 1 }}
              source={{ uri: item }}
            />
          )}
        />
        <View style={{ padding: 20, paddingBottom: 100 }}>
          <Text style={styles.title}>{product?.name}</Text>
          <Text style={styles.price}>${product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
      </ScrollView>

      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    aspectRatio: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: "400",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 10,
    width: "90%",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "400",
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
