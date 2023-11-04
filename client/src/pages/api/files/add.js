import {supabase} from '@/utils/supabaseClient.mjs'

export default async function Add(req, res) {
    // await fetch('/api/auth/login', 
    // )
    let { data1, error1} = await supabase.auth.signInWithPassword({
        email: "example@example.com",
        password: "12345678"
    })
    const {data, error} = await supabase.auth.getUser()

        
    // const avatarFile = event.target.files[0] use this command to retrieve file from form and add it to the api
    const { data, error } = await supabase
    .storage
    .from('avatars')
    .upload('public/avatar1.png', avatarFile, {
        cacheControl: '3600',
        upsert: false
    })
}