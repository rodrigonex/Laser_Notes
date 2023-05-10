import axios from "axios";
import DbConnect from "../App/Db/db.service";

export default class User extends DbConnect {
    async signUp(email: string, password: string) {
        try {
            const response = await axios.post(
                `${this.supabaseUrl}/auth/v1/token?grant_type=password`,
                {
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        apiKey: this.supabaseKey,
                        "Content-Type": "application/json",
                    },
                }
            );

            const { data } = response;
            return data;
        } catch (error) {
            return "Not authorize";
        }
    }
}
