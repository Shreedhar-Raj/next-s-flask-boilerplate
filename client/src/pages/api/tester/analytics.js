import { supabase } from "@/utils/supabaseClient.mjs";

export default async function handler(req, res) {
    supabase.getUser().then(user => {
        console.log(user)
    }).then(res => {
        res.status(200).json({name: "John Doe"})
    }).catch(err => {
        res.status(200).json({name: "John Doe"})
    })
}