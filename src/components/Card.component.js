import { Card } from 'react-native-elements';
import { TouchableOpacity , Text, StyleSheet } from 'react-native';
import { Storage } from '../services/storage.service';

export default function CardComponent (props) {
    
    async function hendlePress(){
        const storage = new Storage();
        await storage.addItem("note", props.note);
        props.navigation.navigate("updateNotes")
    }

    return (
        <TouchableOpacity onPress={hendlePress}  style={styles.card}>
          <Text> <b>Procedimento:</b> {props.note.procedure}</Text>
          <Text> <b>Paciente:</b> {props.note.patient_name}</Text>
          <Text> <b>Data:</b> {props.note.date_procedure}</Text>
        </TouchableOpacity >
    );

}

const styles = StyleSheet.create({
    card: {
        width: "391px",
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
  });

  //onTouchStart={() => props.navigation.navigate("updateNotes", {note: props.note})}
