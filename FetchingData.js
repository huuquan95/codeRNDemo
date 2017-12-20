import React, { Component } from 'react';
import { ListView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class FetchingData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: 'John',
            lastName: 'Dephil'
        }
    }

    _onPressButton() {
        return fetch('http://192.168.64.2/data.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    firstName: responseJson.firstName,
                    lastName: responseJson.lastName
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        let textToDisplay = `Your name: ${this.state.firstName} ${this.state.lastName}`;
        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <TouchableOpacity
                    onPress={() => { this._onPressButton() }}
                >
                    <Text>
                        Get Data
                            </Text>
                </TouchableOpacity>
                <Text>
                    {textToDisplay}
                </Text>
            </View>
        );
    }
}
