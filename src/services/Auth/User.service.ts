import axios from "axios";

export default class User {
    private supabaseUrl = "https://bnnitpbxgephebklzmzd.supabase.co";
    private supabaseKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJubml0cGJ4Z2VwaGVia2x6bXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwNTU2MDEsImV4cCI6MTk5NjYzMTYwMX0.NeTj5bF-YApf10nqzfVq6pZzejvxqB5Xx3L3SR559Go";

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
