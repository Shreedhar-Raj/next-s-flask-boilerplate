import { supabase } from "@/utils/supabaseClient.mjs"
import { NEWS_API_KEY } from "@/utils/masterfulenv.mjs"
import NewsApi from 'newsapi'
import interest from "../onboarding/interest"

export default async function getNews(req, res) {
    let rescults = []
  console.log("hello")
  
   await supabase.from('students').select('interests').eq('id', "ff76c7be-3ace-41f6-aeda-a244faf9c113").then(async result => {
       console.log(result)
       const interests = result.data[0].interests
       
//        const newsapi = new NewsApi( NEWS_API_KEY)

   for (let i = 0; i < interests.length; i++ ) {
        await fetch(`
https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4a09935a9db84ce198a4c51ccbaf2013`)
   .then(resmup => {
         console.log(resmup)
       rescults.push(resmup.body)
   }).catch(err => {console.log(err)})}

   
    
}).catch(err => {
      return res.status(200).json({data: err})
   })
   
   return res.status(200).json({databeay: rescults})
}