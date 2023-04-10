import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://bnnitpbxgephebklzmzd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJubml0cGJ4Z2VwaGVia2x6bXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwNTU2MDEsImV4cCI6MTk5NjYzMTYwMX0.NeTj5bF-YApf10nqzfVq6pZzejvxqB5Xx3L3SR559Go')

export class Database{
    constructor(table){
        this.table = table    
    }

    async getAll() {
        return await supabase.from(this.table).select('*');
    }

    async create(row){
        return await supabase.from(this.table).insert([
            row,
        ]);    
    }

}