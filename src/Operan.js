import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Operan extends Component {
    render() {

        return (
            <View>
                <Text> ini adalah props:  {this.props.kelas} </Text>
            </View>
        )
    }
}
