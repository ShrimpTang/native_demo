/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    RefreshControl
} from 'react-native';

class native_demo extends Component {
    // 构造
    constructor(props) {
        super(props);

        var person = []
        for (let i = 0; i <= 50; i++) {
            person[i] = {name: 'name' + i, age: i}
        }
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            persons: this.ds.cloneWithRows(person),
            origin:person,
            isRefreshing: false
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.persons}
                    renderRow={(rowData) => <Text>{rowData.name}</Text>}
                    onEndReached={this.onEndReached.bind(this)}//到尾端调用
                    onEndReachedThreshold={10}
                    refreshControl={//上啦加载
                    <RefreshControl
                     refreshing={this.state.isRefreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    />
                    }
                />
            </View>
        );
    }


    onEndReached(){
        var person = [];
        for (let i = 0; i <= 30; i++) {
            person[i] = {name: 'name' + (i+200), age: i}
        }
        this.state.origin = this.state.origin.concat(person)
        this.setState({
            origin:this.state.origin,
            persons: this.ds.cloneWithRows(this.state.origin)
        });
    }


    _onRefresh() {
        this.setState({
            isRefreshing: true
        });

        var me =  this;
        setTimeout(()=> {
            var person = []
            for (let i = 111; i <= 166; i++) {
                person[i] = {name: 'name' + i, age: i}
            }
            me.setState({
                persons: this.ds.cloneWithRows(person),
                isRefreshing: false
            });
        }, 2000)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

AppRegistry.registerComponent('native_demo', () => native_demo);
