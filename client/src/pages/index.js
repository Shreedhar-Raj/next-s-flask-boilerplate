import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const {data} = fetch('/api/auth/getSession').then(
res => res.json()
)
.then(data => {
if (data.status === 401 ) {
    window.location.href = '/login'
    
}
else {
  window.location.href = '/dashboard'
}})

 return (
 <div>hi</div>
  )
    }


  





