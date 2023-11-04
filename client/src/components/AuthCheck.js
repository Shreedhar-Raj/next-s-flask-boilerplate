
import {supabase} from '@/utils/supabaseClient.mjs'
const {data} = fetch('/api/auth/getSession').then(
res => res.json()
)
.then(data => {
if (data.status === 401 ) {
    window.location.href = '/login'
    
}
else {
const {dta : {user}} = supabase.auth.getUser()
const id = user.id
let { dat: students, error } = supabase
  .from('students')
  .select('plan')
  .eq('id', user.id)
}
})

// copy paste this at the top of all the restricted route files some will also have to check premium role etc.. but this is the basic one for session the rest shall be done


// also there was no merge conflict