import { createClient } from '@supabase/supabase-js'
import { Storage } from './storage.service';
const supabase = createClient('https://bnnitpbxgephebklzmzd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJubml0cGJ4Z2VwaGVia2x6bXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwNTU2MDEsImV4cCI6MTk5NjYzMTYwMX0.NeTj5bF-YApf10nqzfVq6pZzejvxqB5Xx3L3SR559Go')


export async function signInWithEmailAndPassword(email, password) {
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      return error.message
    } else {
        const storage = new Storage();
        await storage.addItem("acess_token", data.session.access_token)
        await storage.addItem("user_id", data.user.id)
        return true
    }
}
  
