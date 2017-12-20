import React, { Component } from 'react';
import {
    Alert, StyleSheet, View,
    Image, Text,
    Platform
} from 'react-native';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.ignoredYellowBox = ['Remote debugger'];
        console.log(`${Date.now()}, This is contructor.`);
        this.state = {
            numberOfRefresh: 0
        };
        setInterval(() => {
            console.log(`${this.state.numberOfRefresh}, Change State.`);
            this.setState((previousState) => {
                return { numberOfRefresh: previousState.numberOfRefresh + 1 };
            });
        }, 10);
    }

    componentWillMount() {
        console.log(`${Date.now()}, This is componentWillMount.`);
    }

    componentDidMount() {
        console.log(`${Date.now()}, This is componentDidMount.`);
    }

    // Allow change or not change interface.
    shouldComponentUpdate() {
        console.log(`${Date.now()}, This is shouldComponentUpdate.`);
        return true;
    }

    componentWillUpdate() {
        console.log(`${Date.now()}, This is componentWillUpdate.`);
    }

    componentDidUpdate() {
        console.log(`${Date.now()}, This is componentDidUpdate.`);
    }

    render() {
        let seconds = this.state.numberOfRefresh % 60;
        seconds = (seconds < 10) ? `0${(seconds)}` : `${seconds}`;
        let minutes = ((this.state.numberOfRefresh-seconds) % 3600) / 60;
        var hours = this.state.numberOfRefresh / 3600;
        let clock = `${minutes} : ${seconds}`;
        return (
            <View style={{
                flex: 1,
                marginTop: 100,
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'red'
                }}>LifeCycle</Text>
                <Text style={{
                    color: 'orange',
                    marginTop: 10,
                    fontSize: 25,
                    fontWeight: 'bold'
                }}>
                    {clock}
                </Text>
            </View>
        );
    }
}

export default class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var lifeCycle = <LifeCycle></LifeCycle>;
        return (
            <View>
                {lifeCycle}
            </View>
        );
    }

}