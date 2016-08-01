/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity
} from 'react-native';

import SecondComponent from './SecondComponent'
import ChildContextTest from './childContextTest'

class FirstComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            id: 'moumoon',
            user: null
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳转并传递参数</Text>
                    <Text>用户信息{JSON.stringify(this.state.user)}!</Text>
                    <ChildContextTest/>
                </TouchableOpacity>
            </View>
        );
    }

    getChildContext() {
        return {color: 'red'}
    }

    _pressButton() {
        const {navigator} = this.props;
        let me = this;
        if (navigator) {
            navigator.push({
                name: 'SecondComponent',
                component: SecondComponent,
                params: {
                    id: this.state.id,
                    setUser(user){
                        me.setState({
                            user
                        })
                    }
                }
            })
        }
    }
}

FirstComponent.childContextTypes = {
    color: React.PropTypes.string
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

export  default FirstComponent

