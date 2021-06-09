import React from "react";
import { StyleSheet } from "react-native";
import { Badge, Text } from "native-base";

import { connect } from "react-redux";

const FavouriteIcon = (props) => {
  return (
    //This will get the lenght of items from redux and display a small icon in favourites bottom icon
    <>
      {props.favouriteItems.length ? (
        <Badge style={styles.badge}>
          <Text style={styles.text}>{props.favouriteItems.length}</Text>
        </Badge>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  const { favouriteItems } = state;

  return {
    favouriteItems: favouriteItems,
  };
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

export default connect(mapStateToProps)(FavouriteIcon);
