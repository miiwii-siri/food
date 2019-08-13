import React, { Component } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import { normalize } from '../Components/functions'
import { icon, color } from '../../asset'

export default class Splashscreen extends Component {
    componentDidMount = () => {
        setTimeout(() => {
            let resetAction = '';
            resetAction = StackActions.reset({
                index: 0,
                key: null,
                actions: [
                    NavigationActions.navigate({ routeName: "Main" })
                ]
            })
            this.props.navigation.dispatch(resetAction)
        }, 2000);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={icon.chef} style={{ width: normalize(160), height: normalize(160) }} />
                <View style={{ marginTop: normalize(10) }}>
                    <Text style={styles.header}>MiiWii</Text>
                    <Text style={styles.en}>FOOD</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        fontSize: normalize(30),
        textAlign: 'center',
        color: color.text,
    },
    en: {
        fontSize: normalize(24),
        textAlign: 'center',
        color: color.text,
        lineHeight: normalize(24)
    }
})
