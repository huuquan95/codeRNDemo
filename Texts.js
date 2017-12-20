import React, { Component } from 'react';
import { TextInput, View, Text, Keyboard } from 'react-native';

export default class Texts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yourEmail: 'Please type your email.',
            yourPass: 'Please type your password.',
            notice:"Nothing happen."
        }
    }

    compoentWillMount(){
        this.KeyBoardDidShowListener =  Keyboard.addListener('KeyBoardDidShow', () => {
            this.setState(() => {
                return {notice:'Keyboard has been shown.'};
            });
        });
        this.KeyBoardDidhideListener =  Keyboard.addListener('KeyBoardDidHide', () => {
            this.setState(() => {
                return {notice:'Keyboard has been hidden.'};
            });
        });
    }

    componentWillUnmount(){
        this.KeyBoardDidShowListener.remove();
        this.KeyBoardDidHideListener.remove();
    }

    render() {
        let yourInfo = `Your email: ${this.state.yourEmail}\rYour password: ${this.state.yourPass}`;
        return (
            <View>
                <TextInput
                    style={{ textAlign: 'center', marginTop: 20 }}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    placeholderTextColor='red'
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previousText) => {
                                    return {
                                        yourEmail: text
                                    };
                                }
                            );
                        }
                    }
                    autoFocus={true} />
                <TextInput
                    style={{ textAlign: 'center', height: 40 }}
                    keyboardType='default'
                    secureTextEntry={true}
                    placeholder='Enter your password'
                    placeholderTextColor='red'
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previousText) => {
                                    return {
                                        yourPass: text
                                    };
                                }
                            );
                        }
                    } />

                <Text style={{
                    color: "orange",
                    textAlign: 'center',
                    height: 40,
                }}
                >{yourInfo}</Text>
                <TextInput
                    style={{ padding: 10, marginLeft: 30, marginRight: 30, textAlign: 'left', height: 150, marginTop: 50 }}
                    keyboardType='default'
                    onSubmitEditing={Keyboard.dismiss}
                    secureTextEntry={true}
                    placeholder='Type your feedback here.'
                    placeholderTextColor='black'
                    multiline={true}
                    borderColor='green'
                    borderWidth={3}
                    returnKeyType='done'
                />
                <Text style={{marginTop:40, marginLeft: 40}}>{this.state.notice}</Text>
            </View>
        );
    }
}