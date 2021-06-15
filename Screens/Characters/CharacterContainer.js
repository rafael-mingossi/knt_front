import React, { useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Container, H1 } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { useSelector, useDispatch } from "react-redux";
import {
  getCharacters,
  addFavorite,
  removeFavorite,
} from "../../Redux/Actions/favouriteActions";

var { height, width } = Dimensions.get("window");

const CharacterContainer = () => {
  const { characters, favorites } = useSelector(
    (state) => state.favouriteItems
  );
  const dispatch = useDispatch();
  const fetchCharacters = () => dispatch(getCharacters());
  const addToFavorites = (fav) => dispatch(addFavorite(fav));
  const removeFromFavorites = (fav) => dispatch(removeFavorite(fav));

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleAddFavorite = (fav) => {
    addToFavorites(fav);
  };

  const handleRemoveFavorite = (fav) => {
    removeFromFavorites(fav);
  };

  const exists = (fav) => {
    if (favorites.filter((item) => item.id === fav.id).length > 0) {
      return true;
    }
    return false;
  };

  return (
    <Container>
      <H1 style={{ alignSelf: "center" }}>Characters List</H1>
      <ScrollView>
        <View style={styles.listContainer}>
          {characters.map((item) => {
            return (
              <View style={styles.container} key={item.id}>
                <Image
                  style={styles.image}
                  resizeMode="contain"
                  source={{
                    uri: item.image,
                  }}
                />
                <View style={styles.card} />
                <Text style={styles.title}>
                  {item.name.length > 15
                    ? item.name.substring(0, 15 - 3) + "..."
                    : item.name}
                </Text>
                <Text style={styles.secondTxt}>{item.species}</Text>
                <Text style={styles.secondTxt}>{item.status}</Text>
                <TouchableOpacity
                  onPress={() =>
                    exists(item)
                      ? handleRemoveFavorite(item)
                      : handleAddFavorite(item)
                  }
                  activeOpacity={0.7}
                  style={styles.touchableOp}
                >
                  <MaterialIcons
                    color="red"
                    size={32}
                    name={exists(item) ? "favorite" : "favorite-outline"}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "#ded9d9",
  },
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white",
  },
  image: {
    width: width / 2.7 - 20 - 10,
    height: width / 2.7 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -10,
    borderRadius: 10,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  secondTxt: {
    fontSize: 12,
    color: "orange",
    marginTop: 5,
  },
  touchableOp: {
    marginLeft: 5,
    flexDirection: "row",
    padding: 2,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
  },
});

export default CharacterContainer;
