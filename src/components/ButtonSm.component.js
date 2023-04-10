import { Button} from 'react-native-elements';

export default function ButtonSmComponent(props) {
  return (
       <Button title={props.title} buttonStyle={{ backgroundColor: "#603E93", height: 56}} titleStyle={{fontSize: "18px"}} containerStyle={{
                width: 176,
                marginVertical: 20,
            }}
            onPress={props.nav}
        />
  );
}
