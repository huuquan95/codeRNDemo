import React, { Component } from 'react';
import {
    Alert, StyleSheet, View,
    Image, Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

export default class Touches extends Component {

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
                <TouchableHighlight
                    onPress={this._onPressButton}
                    underlayColor='red'
                // onShowUnderlay={() => {
                //     Alert.alert('onShowUnderlay Button!')
                // }}
                >
                    <View style={{ backgroundColor: 'green' }}>
                        <Image
                            style={{ width: 100, height: 40 }}
                            source={require('./images/button1.png')}></Image>
                        {/* <Text
                            style={{
                                color: 'white',
                                padding: 10,
                            }}>
                            TouchableHighlight
                        </Text> */}
                    </View>
                </TouchableHighlight>
                <TouchableNativeFeedback></TouchableNativeFeedback>
                <TouchableOpacity
                    onPress={this._onPressButton}
                    activeOpacity={0.2}>
                    <View style={{
                        borderRadius:10,
                        backgroundColor: 'cyan',
                    }}>
                        <Text style={{
                            margin: 10,
                            textAlign: 'center'
                        }}>
                            TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback
                    //onPress={this._onPressButton}
                    onPressIn={ () => {
                        Alert.alert('onPressIn');
                    }}
                    onPressOut={ () => {
                        Alert.alert('onPressOut');
                    }}
                    activeOpacity={0.2}>
                    <View style={{
                        marginTop:20,
                        borderRadius:10,
                        backgroundColor: 'purple',
                    }}>
                        <Text style={{
                            margin: 10,
                            textAlign: 'center'
                        }}>
                            TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}