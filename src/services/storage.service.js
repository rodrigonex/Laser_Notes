import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage{
    async addItem (itemName, value) {
        try{
            await AsyncStorage.setItem(itemName, value)
        }catch(error){
            return(error)
        }
    }

    async getItem (itemName) {
        try{
            return await AsyncStorage.getItem(itemName)
        }catch(error){
            return(error)
        }
    }

    async removeItem (itemName) {
        try{
            return await AsyncStorage.removeItem(itemName)
        }catch(error){
            return(error)
        }
    }

}