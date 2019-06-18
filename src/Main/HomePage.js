
'use strict'
import {
    View,
    Text,
    Image,
    Button,
    Dimensions
} from 'react-native'
import React, { Component } from 'react';
import { observer } from 'mobx-react'
import AppStore from './AppStore';

@observer
export default class HomePage extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#fff", justifyContent: 'space-around', alignItems: 'center' }} >
                <Button title='增加' onPress={() => {
                    AppStore.add();
                }} />
                <Text>{AppStore.clickedCount}</Text>
                <Button title='减少' onPress={() => {
                    AppStore.reduce();
                }} />
            </View>
        )
    }
}