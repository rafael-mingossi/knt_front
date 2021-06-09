import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";

const FavouriteItem = (props) => {
  const data = props.item.item.favourite.item;
  //console.log(data);

  return (
    <ListItem style={styles.listItem} key={Math.random()} avatar>
      <Left>
        <Thumbnail
          source={{
            uri: data.image,
          }}
        />
      </Left>
      <Body style={styles.body}>
        <Left>
          <Text>
            {data.name.length > 17
              ? data.name.substring(0, 17 - 3) + "..."
              : data.name}
          </Text>
        </Left>
        <Right>
          <Text>{data.status}</Text>
        </Right>
        <Right>
          <Text>{data.species}</Text>
        </Right>
      </Body>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default FavouriteItem;
