import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Storage {
    async setItem(name: string, value: string) {
        try {
            await AsyncStorage.setItem(name, value);
        } catch (e) {
            console.log("deu erro");
            console.log(e);
        }
    }

    async getItem(name: string) {
        try {
            return await AsyncStorage.getItem(name);
        } catch (e) {
            console.log(e);
        }
    }
}
