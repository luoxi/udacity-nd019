import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";
import { connect } from "react-redux";

import * as actions from "../actions";

class DeckList extends Component {
  static navigationOptions = {
    title: "Deck List"
  };

  componentDidMount() {
    this.props.getDecks();
  }

  render() {
    return (
      <List
        containerStyle={{
          marginTop: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0
        }}
      >
        <FlatList
          data={Object.values(this.props.decks)}
          renderItem={({ item }) => (
            <ListItem
              onPress={() =>
                this.props.navigation.navigate("Deck", {
                  title: item.title
                })}
              key={item.title}
              title={
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text>{item.title}</Text>
                </View>
              }
              subtitle={
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text>{`${item.questions.length} cards`}</Text>
                </View>
              }
            />
          )}
        />
      </List>
    );
  }
}

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps, actions)(DeckList);