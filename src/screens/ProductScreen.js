import { StyleSheet, Image, View, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { productSlice } from "../store/ProductSlice";

const ProductScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
const products = useSelector(state=> state.products.products)

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productSlice.actions.setSelectedProduct(item.id))
            navigation.navigate("ProductDetails");
          }}
          style={styles.itemContainer}
        >
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { aspectRatio: 1, width: "100%" },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});

export default ProductScreen;
