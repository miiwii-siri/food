import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { normalize, height, width } from './functions/normalize';
import { color, icon } from '../../asset'
import styled from './styles/styled'
import font from '../../asset/font';

export const HeaderBack = withNavigation(({ navigation }) => {
    return <TouchableOpacity onPress={() => navigation.goBack(null)} style={{flexDirection: 'row' }}>
        <Image source={icon.back} style={styles.headerBack} resizeMode={'contain'} />
        <Text style={styles.headerText}>กลับ</Text>
    </TouchableOpacity>
})

export const HeaderTitle = ({ title }) => {
    return (
        <View style={styles.headerWrapper}>
            <Text adjustsFontSizeToFit style={styles.headerText} numberOfLines={2} >{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerWrapper: {
        flex: 1,
    },
    headerText: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: normalize(26),
        color: color.text,
        width: '100%',
        fontFamily: font.regular
    },
    headerBack: {
        textAlign: 'left',
        alignSelf: 'center',
        fontSize: normalize(24),
        tintColor: color.text,
        color: color.text,
        fontFamily: font.regular
    }
})