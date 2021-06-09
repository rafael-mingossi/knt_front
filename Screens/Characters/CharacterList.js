import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";

import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/favouriteActions";

import EasyButton from "../../Shared/StyledComponents/EasyButton";
import Toast from "react-native-toast-message";

var { width } = Dimensions.get("window");

const CharacterList = (props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
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

      <View style={{ marginBottom: 60 }}>
        <EasyButton
          primary
          medium
          onPress={() => {
            props.addItemToFavourite(props),
              Toast.show({
                type: "success",
                topOffset: 60,
                text1: `${name} added to Cart`,
                text2: "Check your Cart",
              });
          }}
        >
          <Text style={{ color: "white" }}>Favourite</Text>
        </EasyButton>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToFavourite: (favourite) =>
      dispatch(actions.addToFavourite({ favourite })),
  };
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7, //this is for the gray square, the larger the number, the smaller is the gray square
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
});

export default connect(null, mapDispatchToProps)(CharacterList);
