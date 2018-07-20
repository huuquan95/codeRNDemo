import React, {Component} from 'react';
import {Text} from 'react-native';
//abc
export default class App extends Component{
    render(){
        let textToDisplay='\r\rThis is App.js file.'
        return(
            <Text>{textToDisplay}</Text>
        );
    }
}
