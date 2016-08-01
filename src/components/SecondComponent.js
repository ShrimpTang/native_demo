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
    TouchableHighlight
} from 'react-native';


class SecondComponent extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            id:null
        };
      }

    componentDidMount() {
        this.setState({
            id:this.props.id
        })
    }
    render() {
        return (
            <View style={styles.container}>
               <TouchableHighlight onPress={this._pressButton.bind(this)}>
                   <Text>第二页面,点我跳回去{this.state.id}</Text>
               </TouchableHighlight>
            </View>
        );
    }
    _pressButton(){
        const {navigator} = this.props;
        if(navigator){
            if(this.props.setUser){
                this.props.setUser({
                    name:'LOLI'
                })
            }
            navigator.pop();
        }
    }
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

export  default SecondComponent

