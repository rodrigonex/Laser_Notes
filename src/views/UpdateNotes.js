
import {  View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import {styles} from '../styles/login.style'
import { useEffect, useState } from 'react';
import { Storage } from '../services/storage.service';

export default props => {
    const [note, setNote]= useState("");

    useEffect(() => {
        async function getNote(){
            console.log("entrou")
            const storage = new Storage;
            setNote(await storage.getItem("note"))
        }

        getNote()
    },[])

    console.log(note.id)
    console.log(props)
  return (
    <View style={styles.container}>
        <Text h3 h3Style={{marginVertical: 10}}>Reset</Text>
       
    </View>
  );
}


