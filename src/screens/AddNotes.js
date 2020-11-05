import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { Text,IconButton,TextInput, FAB } from 'react-native-paper';
import Header from '../components/header'

function AddNotes({navigation}) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteDescription, setNoteDescription] = useState('')

    function onSaveNote(){
        navigation.state.params.addNote({noteTitle, noteDescription})
        navigation.goBack()
    }

    return (
        <>
        <Header titleText = 'Add a New Note' />
        <IconButton
            icon = "close"
            size = {20}
            color = 'white'
            onPress = {()=>navigation.goBack()}
            style = {styles.iconButton}
        />

        <View style = {styles.container}>
            <TextInput
                label = "Add Title"
                value = {noteTitle}
                mode = 'outlined'
                onChangeText = {setNoteTitle}
                style = {styles.title}
            />
            <TextInput
                label = "Add Description"
                value = {noteDescription}
                onChangeText = {setNoteDescription}
                mode = "flat"
                multiline=  {true}
                style = {styles.text}
                scrollEnabled = {true}
                returnKeyLabel = 'done'
                blurOnSubmit = {true}
            />
            <FAB
                style = {styles.fab}
                large
                icon = "check"
                disabled = {noteTitle == '' ? true : false}
                onPress = {() => onSaveNote()}
            />

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
    iconButton: {
        backgroundColor: '#219653',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 15
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent:'center',
        flex: 1
    },
    title:{
        // backgroundColor: '#fff',
        color:'#fff',
        fontSize: 20
    },
    title:{
        fontSize: 24,
        marginBottom: 16
    },
    text:{
        // backgroundColor: '#fff',
        height: 300,
        fontSize: 16
    },
    fab:{
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor:'#219653'
    }
})

export default AddNotes;
