/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Button,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
const util = require('util');

class RecentChatsScreen extends React.Component {
  render() {
    return <Text>List of recent chats</Text>
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>This is Home Screen.</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Quinto' })}
          title="Chat now"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Hi, ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    const { goBack } = this.props.navigation;
    console.log('abc');
    // console.log("CHAO BAN" +util.inspect(this.props.navigation, false, null));
    return (
      <View>
        <Text>Chat with {params.user}</Text>
        <Button
          onPress={() => { goBack() }}
          title="Come back"
        />
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});

export default class NavStack extends React.Component {
  render() {
    return (
      <SimpleApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
