import React, { Component } from 'react';
import { FlatList, Text, Button, View, TouchableOpacity, Image } from 'react-native'

export default class Screen2 extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Hi, ${navigation.state.params.name}`
        ,
        headerTintColor: `${navigation.state.params.textColor}`,
        headerStyle: {
            backgroundColor: `${navigation.state.params.backgroundColor}`,
        },
        headerLeft:
            <TouchableOpacity title='Right'
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Image source={require('./images/leftHeader.png')} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
        ,
        headerRight:
            <TouchableOpacity title='Right'
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Image source={require('./images/rightHeader.png')} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
    });

    render() {
        return (
            <View>
                <Text style={{ padding: 20, fontSize: 25, alignSelf: 'center', color: '#00e640' }}>Where are you from, {this.props.navigation.state.params.user}?</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title='Go home'></Button>
            </View>
        )
    }
}