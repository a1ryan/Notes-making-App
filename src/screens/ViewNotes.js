import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import { Text,FAB,List } from 'react-native-paper';
import Header from '../components/header';
import {useSelector, useDispatch} from 'react-redux';
import {addnote, deletenote} from '../reducers/noteApp'

function ViewNotes({navigation}) {
    // const [notes, setNotes] = useState([]);
     const notes = useSelector(state => state)
     const dispatch = useDispatch()

     const addNote = note => {
         console.log(note)
         dispatch(addnote(note))
     }
    
     const deleteNote = id =>dispatch(deletenote(id))

    // const addNotes = note => {
    //     note.id = notes.length + 1
    //     setNotes([...notes, note])
    // }

    return (
        <>
        <Header titleText='Your Notes' />
        <View style = {styles.container}>
            { notes.length === 0 ? (
                <View style = {styles.titleContainer} >
                    <Text style = {styles.title} >You do not have any notes </Text>
                </View> 
            ) : (
                    <FlatList
                        data = {notes}
                        renderItem = {({item}) => (
                            <List.Item
                                title = {item.note.noteTitle}
                                description = {item.note.noteDescription}
                                descriptionNumberOfLines = {1}
                                titleStyle = {styles.listTitle}
                                onPress = {() => deleteNote(item.id)}
                            />
                        )}
                            keyExtractor = {item => item.id.toString()}
                    />
                )}
            
            <FAB
            style = {styles.fab}
                small
                icon = 'plus'
                label = 'Add Note'
                onPress = {() => navigation.navigate('AddNotes', { addNote })}
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
    titleContainer: {
        alignItems: 'center',
        justifyContent:'center',
        flex: 1
    },
    title:{
        color:'#000000',
        fontSize: 20
    },
    fab:{
        backgroundColor: '#219653',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    listTitle:{
        fontSize: 20
    }
})

export default ViewNotes
