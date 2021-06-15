import React from "react";
import { StyleSheet } from "react-native";
import { Badge, Text } from "native-base";
import { useSelector } from "react-redux";

const FavouriteIcon = (props) => {
  const { favorites } = useSelector((state) => state.favouriteItems);
  return (
    //This will get the lenght of items from redux and display a small icon in favourites bottom icon
    <>
      {favorites.length !== 0 ? (
        <Badge style={styles.badge}>
          <Text style={styles.text}>{favorites.length}</Text>
        </Badge>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  badge: {
    width: 25,
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    top: -4,
    right: -15,
  },
  text: {
    fontSize: 12,
    width: 100,
    fontWeight: "bold",
  },
});

export default FavouriteIcon;
