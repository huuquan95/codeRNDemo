import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Button from 'react-native-button';

export default class TouchesAndGestures extends Component {

    _onPressButton = () => {
        Alert.alert('Don\'t touch me!');
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button style={{
                    color: 'white',
                    backgroundColor: '#00e640',
                    padding: 10,
                    borderRadius: 13
                }}
                    onPress={this._onPressButton}
                >Click Me 2.1.0</Button>

                {/* Button from react-native, not react-native-button */}
                {/* <View style={{
                    backgroundColor: '#00e640',
                    borderRadius: 13,
                    padding: 5,
                    shadowRadius: 20,
                    shadowOpacity: 0.5
                }}>
                    <Button
                        onPress={this._onPressButton}
                        title='Click me!'
                        color='#ffffff' />
                </View> */}
            </View>
        );
    }
}
