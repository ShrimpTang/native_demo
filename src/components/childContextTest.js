/**
 * Created by Shrimp on 16/7/31.
 */
import React from 'react';
import {View,Text} from 'react-native';
class ChildContextTest extends React.Component {

    render() {
        return (
            <View>
                <Text>111{this.context.color}</Text>
            </View>
        )
    }
}
ChildContextTest.contextTypes = {
    color: React.PropTypes.string
}
export default ChildContextTest;