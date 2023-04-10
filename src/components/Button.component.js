import { Button} from 'react-native-elements';

export default function ButtonComponent(props) {
  return (
       <Button title={props.title} buttonStyle={{ backgroundColor: "#603E93" }} titleStyle={{fontSize: "20px"}} containerStyle={{
                width: 129,
                height: 40,
                marginVertical: 20
            }}
            onPress={props.nav}
        />
  );
}
