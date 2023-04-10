import {  SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Stack from "./Stack";

export default function Navigation() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
      </SafeAreaView>
    );
  }