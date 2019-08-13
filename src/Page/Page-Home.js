import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { menu } from '../Components/resource/constant';
import { width } from '../Components/functions/normalize';
import { RenderMenu } from '../Components/FlatList'
import styled from '../Components/styles/styled'

export default class PageHome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={menu}
                    numColumns={2}
                    style={{ width, flex: 1, }}
                    keyExtractor={(item) => item.id + ''}
                    bounces={false}
                    renderItem={({ item, index }) => <RenderMenu item={item} navigation={this.props.navigation} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
})