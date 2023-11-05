import Image from 'next/image'
import { Inter } from 'next/font/google'
//import { localStorage } from '@/utils/localstorage.mjs'
const inter = Inter({ subsets: ['latin'] })
import {redirect} from 'next/dist/server/api-utils'
import {supabase} from '@/utils/supabaseClient.mjs'

export default function Home() {

  // fetch('/api/auth/getSession') .then(res => 

//   // redirect(200, '/login')
// )
 return (
 <div>hi</div>
  )
    }


  // localStorage and window not working here (not defined) need to implement check for localstorage.getItem('session') existing, if does not exist then redirect to login page





