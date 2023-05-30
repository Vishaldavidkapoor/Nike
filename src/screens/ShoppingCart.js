import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import cart from "../data/cart";
import CartListItem from "../../component/CartListItem";
import { useSelector } from "react-redux";

const ShoppingCartTotal = () => (
  <View style={styles.totalContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>140, 00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>14, 00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.total}>Total</Text>
      <Text style={styles.total}>154, 00 US$</Text>
    </View>
  </View>
);

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotal}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
    paddingBottom:80,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  total: {
    fontSize: 16,
    fontWeight: "500",
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

export default ShoppingCart;
