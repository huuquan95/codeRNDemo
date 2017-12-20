import React from 'react';
import { Image, Button, StyleSheet, View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
    };
    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Messages')}
                    title="Go to messages"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Contacts')}
                    title="Go to contacts"
                />
            </View>
        );
    }
}

class ContactsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Contacts',
    };
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Button style={{ height: 50, backgroundColor: 'powderblue' }}
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
                <Button style={{ height: 100, backgroundColor: 'skyblue' }}
                    onPress={() => this.props.navigation.navigate('Messages')}
                    title="Go to messages"
                />
                <Button style={{ height: 150, backgroundColor: 'steelblue' }}
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="Go to home"
                />
                <Text style={{ height: 50, fontSize:30, backgroundColor: 'powderblue'}}>
                    This is ContactsScreen
                    </Text>
            </View>
        );
    }
}

class MessagesScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Messages',
    };
    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="Go to home"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Contacts')}
                    title="Go to contacts"
                />
            </View>
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
    };
    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('Messages')}
                    title="Go to messages"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="Go to home"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Contacts')}
                    title="Go to contacts"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

const MyApp = TabNavigator(
    {
        Home: {
            screen: MyHomeScreen,
        },
        Notifications: {
            screen: MyNotificationsScreen,
        },
        Messages: {
            screen: MessagesScreen,
        },
        Contacts: {
            screen: ContactsScreen,
        },
    }
    ,
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            inactiveTintColor:'#006e40',
            activeTintColor: '#00e640',
        },
    }
);

export default MyApp;
