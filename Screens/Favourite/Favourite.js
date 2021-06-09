import React from "react";
import { Dimensions, View, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Text, Left, Right, H1 } from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/FontAwesome";
import EasyButton from "../../Shared/StyledComponents/EasyButton";

import FavouriteItem from "./FavouriteItem";

import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/favouriteActions";

var { height, width } = Dimensions.get("window");

const Favourite = (props) => {
  return (
    <>
      {props.favouriteItems.length ? (
        //favouriteItems comes from Reducer
        <Container>
          <H1 style={{ alignSelf: "center" }}>Favourite List</H1>
          <SwipeListView
            style={{ marginBottom: 40 }}
            data={props.favouriteItems}
            keyExtractor={(data, index) => Math.random().toString()}
            renderItem={(data) => <FavouriteItem item={data} />}
            //this will render the item hidden, slide left
            renderHiddenItem={(data) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity
                  style={styles.hiddenButton}
                  onPress={() => props.removeFromFavourite(data.item)}
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
          <View style={styles.bottomContainer}>
            <Right>
              <EasyButton medium danger onPress={() => props.clearFavourite()}>
                <Text style={{ color: "white" }}>Clear</Text>
              </EasyButton>
            </Right>
          </View>
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

const mapStateToProps = (state) => {
  const { favouriteItems } = state;

  return {
    favouriteItems: favouriteItems,
  };
};

//this will dispatch the action functions in redux to clear or remove favourites
const mapDispatchToProps = (dispatch) => {
  return {
    clearFavourite: () => dispatch(actions.clearFavourite()),
    removeFromFavourite: (item) => dispatch(actions.removeFromFavourite(item)),
  };
};

const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },

  bottomContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    elevation: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
