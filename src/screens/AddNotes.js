import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Text } from 'react-native-paper';
import Header from '../components/header'

function AddNotes() {
    return (
        <>
        <Header titleText = 'Add a New Note' />
        <View style = {styles.container}>
            <View style = {styles.titleContainer} >
                <Text style = {styles.title} >Add Notes here </Text>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent:'center',
        flex: 1
    },
    title:{
        color:'#000000',
        fontSize: 20
    }
})

export default AddNotes;
