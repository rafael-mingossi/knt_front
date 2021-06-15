import React from "react";
import { Dimensions, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Container,
  Text,
  Left,
  Right,
  H1,
  ListItem,
  Thumbnail,
  Body,
} from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/FontAwesome";

import { useSelector, useDispatch } from "react-redux";

var { height, width } = Dimensions.get("window");

import { removeFavorite } from "../../Redux/Actions/favouriteActions";

const Favourite = () => {
  const { favorites } = useSelector((state) => state.favouriteItems);
  //console.log(favorites);
  const dispatch = useDispatch();
  const removeFromFavorites = (fav) => dispatch(removeFavorite(fav));
  const handleRemoveFavorite = (fav) => {
    removeFromFavorites(fav);
  };

  return (
    <>
      {favorites.length !== 0 ? (
        <Container>
          <H1 style={{ alignSelf: "center" }}>Favourite List</H1>
          <Text style={{ textAlign: "center", padding: 10 }}>
            Slide left to delete
          </Text>
          <SwipeListView
            style={{ marginBottom: 10 }}
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ListItem style={styles.listItem} key={item.id} avatar>
                <Left>
                  <Thumbnail
                    source={{
                      uri: item.image,
                    }}
                  />
                </Left>
                <Body style={styles.body}>
                  <Left>
                    <Text>
                      {item.name.length > 17
                        ? item.name.substring(0, 17 - 3) + "..."
                        : item.name}
                    </Text>
                  </Left>
                  <Right>
                    <Text>{item.status}</Text>
                  </Right>
                  <Right>
                    <Text>{item.species}</Text>
                  </Right>
                </Body>
              </ListItem>
            )}
            //this will render the hidden item , slide left
            renderHiddenItem={({ item }) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity
                  style={styles.hiddenButton}
                  onPress={() => handleRemoveFavorite(item)}
                >
                  <Icon name="trash" color={"white"} size={26} />
                </TouchableOpacity>
              </View>
            )}
            //more props for the effects
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            stopLeftSwipe={75}
            rightOpenValue={-75}
          />
        </Container>
      ) : (
        <Container style={styles.emptyContainer}>
          <Text>You have no favourite characters</Text>
          <Text>Add characters to your list</Text>
        </Container>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },

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
  hiddenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  hiddenButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 25,
    height: 70,
    width: width / 1.2,
  },
});

export default Favourite;
