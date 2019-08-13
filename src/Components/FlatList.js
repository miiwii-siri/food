import React from 'react';
import { Text, View, Image, StyleSheet, StatusBar, TouchableOpacity, Platform } from 'react-native'
import { normalize, height, width } from './functions/normalize';
import { color, icon } from '../../asset'

let h = Platform.OS === 'android' ? (StatusBar.currentHeight + normalize(55)) : (height > 812 || width > 812) ? normalize(60) : normalize(100);

export const RenderMenu = ({ item, navigation }) => {
    let { navigate } = navigation
    return <TouchableOpacity style={[styles.containerMenu]} key={item.id} onPress={() => navigate('ListMenuAll', { id: item.id })}>
        <Image source={item.icon} style={{ width: normalize(100), height: normalize(100) }} resizeMode={'contain'} />
        <Text style={styles.textMenu}>{item.name}</Text>
    </TouchableOpacity >
}






// ========================================================================================================================================
// ========================================================================================================================================

const styles = StyleSheet.create({
    containerMenu: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: normalize(10),
        height: (height - h) / 3,
        elevation: 1
    },
    textMenu: {
        fontSize: normalize(24),
        marginTop: normalize(2),
        color: color.text
    },
    containerEmployee: {
        paddingVertical: normalize(6),
        paddingHorizontal: normalize(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.2,
        borderBottomColor: color.bg
    },
    name: {
        fontSize: normalize(22)
    },
    position: {
        fontSize: normalize(20)
    },
    iconNext: {
        transform: [{ rotate: '180deg' }],
        tintColor: color.text,
        width: normalize(20),
        height: normalize(20)
    },
    iconMobile: {
        width: normalize(20),
        height: normalize(20)
    }
})