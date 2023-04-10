
import { View, StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { Database } from '../services/database.service';
import CardComponent from '../components/Card.component';
import { Text } from 'react-native-elements';


export default props => {
    const [notes, setNote] = useState([]);

    useEffect(() => {
        async function db() {
            const database = new Database("notes");
            const { data, error } = await database.getAll()

            if (error !== null) {
                console.warn(error);
            } else {
                setNote(data);
            }
        }
        db();
    }, []);

    const renderItem = ({ item }) => (
        <CardComponent note={item} navigation={props.navigation}/>
      );

    return (
        <View style= {styles.container}>
            <Text h3 h3Style={styles.h3_header}>Editar Anotação</Text>
            <Text h3 h3Style={styles.h3}>Selecione  a Anotação:</Text>
            <FlatList
                data={notes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    h3_header: {
        fontSize: "28px",
        color: "#603E93",
        marginTop: 10,
        marginBottom: 11
    },
    h3: {
        fontSize: "24px",
        marginBottom: 15,
        alignItems: "flex-start",
        width: "80%",
    }
})


