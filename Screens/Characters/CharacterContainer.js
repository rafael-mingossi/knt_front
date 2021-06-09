import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import { Container, Text } from "native-base";
import { useFocusEffect } from "@react-navigation/native";

import baseURL from "../../assets/common/baseUrl";
import axios from "axios";

import CharacterList from "./CharacterList";

var { height } = Dimensions.get("window");

const CharacterContainer = (props) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      //Characters
      axios
        .get(`${baseURL}extapis`)
        .then((res) => {
          setCharacters(res.data.results);
          //console.log(res.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Api characters call error");
        });

      //will clear the call of the states above
      return () => {
        setCharacters([]);
      };
    }, [])
  );

  return (
    <ScrollView>
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <View style={styles.listContainer}>
          {characters.map((item) => {
            return (
              <CharacterList
                key={item.id}
                item={item}
                navigation={props.navigation}
              />
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ded9d9",
    flexWrap: "wrap",
  },
  listContainer: {
    height: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "#ded9d9",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    height: height / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CharacterContainer;
