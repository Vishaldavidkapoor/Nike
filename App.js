import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, FlatList } from "react-native";
import products from "./src/data/products";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList data={products} numColumns={2} renderItem={({ item }) => ( 
        <View style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      </View>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { aspectRatio: 1, width: "100%" },
  itemContainer:{
    width:'50%',
    padding:1,
  }
});
