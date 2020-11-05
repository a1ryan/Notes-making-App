import React from 'react';
import {StyleSheet, View} from 'react-native'
import {Appbar, Title} from 'react-native-paper'

function Header({titleText}) {
    return (
        <Appbar.Header style = {styles.headerContainer}>
            <view style = {styles.container}>
                <Title style = {styles.title}>{titleText}</Title>
            </view>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#242424',
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        color:'#fff'
    }
});

export default Header