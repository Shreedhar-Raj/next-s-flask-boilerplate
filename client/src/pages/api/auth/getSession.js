import { supabase } from '@/utils/supabaseClient'
export default async function getSession(req, res) {

    const { data: {session} } = await supabase.auth.getSession()

    if (session) {

        return res.status(200).json({ status:200, success: true})}
    else {
        return res.status(401).json({ status:401, success: false})}
}