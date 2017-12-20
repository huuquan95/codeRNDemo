import React, { Component } from 'react';
import { FlatList, Text, Button, View, Alert, TouchableHighlight, TouchableOpacity } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation';
import Screen2 from './Screen2';
import { SimpleApp } from './NavStack';

class FlatItemList extends Component {
    _onPress = (textColor, backgroundColor) => {
        this.props.nav.navigate('Screen2', { name: 'Quinto', textColor: textColor, backgroundColor: backgroundColor });
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this._onPress.bind(this, '#ffffff', '#00a404')}
                    style={{ backgroundColor: '#00a404', alignItems: 'center', padding: 10 }}
                >
                    <Text style={{ fontSize: 25 }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._onPress.bind(this, '#ffffff', '#00e640')}
                    style={{ backgroundColor: '#00e640', alignItems: 'center', padding: 10 }}
                >
                    <Text style={{ fontSize: 25 }}>Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._onPress.bind(this, '#000000', '#66CC99')}
                    style={{ backgroundColor: '#66CC99', alignItems: 'center', padding: 10 }}
                >
                    <Text style={{ fontSize: 25 }}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._onPress.bind(this, '#000000', '#86E2D5')}
                    style={{ backgroundColor: '#86E2D5', alignItems: 'center', padding: 10 }}
                >
                    <Text style={{ fontSize: 25 }}>Contacts</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

class Screen1 extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <FlatItemList
                nav={this.props.navigation} >
            </FlatItemList>
        )
    }
}

const SimpleNav = StackNavigator({
    Screen1: { screen: Screen1 },
    Screen2: { screen: Screen2 }
});

export default SimpleNav;