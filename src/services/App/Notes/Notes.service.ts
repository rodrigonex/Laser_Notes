import axios from "axios";
import { Notes } from "../../../utils/Interfaces/Notes";
import { useNavigation } from "@react-navigation/native";

import DbConnect from "../Db/db.service";
import Storage from "../../Auth/Storage.service";

export default class NotesServices extends DbConnect {
    protected storage = new Storage();

    async getAll(): Promise<Notes[] | string> {
        try {
            const token = await this.storage.getItem("@access_token");

            const user_id = await this.storage.getItem("@user_id");

            const response = await axios.get(
                `${this.supabaseUrl}/rest/v1/notes?user_id=eq.${user_id}&select=*`,
                {
                    headers: {
                        apiKey: this.supabaseKey,
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const { data } = response;
            return data;
        } catch (error: any) {
            const navigation = useNavigation();
            navigation.navigate("Home");
            return "Not authorize";
        }
    }

    async create(note: Notes) {
        try {
            const token = await this.storage.getItem("@access_token");
            const user_id = await this.storage.getItem("@user_id");

            if (user_id !== null) {
                note.user_id = user_id;
            }
            console.log(note);
            const response = await axios.post(
                `${this.supabaseUrl}/rest/v1/notes`,
                note,
                {
                    headers: {
                        apiKey: this.supabaseKey,
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const { data } = response;
            return data;
        } catch (error) {
            console.log(error);
            const navigation = useNavigation();
            navigation.navigate("Home");
            return "Not authorize";
        }
    }

    async update(note: Notes) {
        try {
            const token = await this.storage.getItem("@access_token");
            const id = note.id;

            delete note.id;

            await axios.post(
                `${this.supabaseUrl}/rest/v1/notes?id=eq.${id}`,
                note,
                {
                    headers: {
                        apiKey: this.supabaseKey,
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            //const { data } = response;
            //return data;
        } catch (error: any) {
            const navigation = useNavigation();
            navigation.navigate("Home");
            return "Not authorize";
        }
    }
}
