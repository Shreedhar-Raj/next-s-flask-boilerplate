
import React from 'react';
import {supabase} from '@/utils/supabaseClient.mjs'
import {v4 as uuidv4} from 'uuid'
export default function fileUpload() {
 let [filename, setfilename] = React.useState('');
  let [file, setfile] = React.useState();
  
  let [filetype, setfiletype] = React.useState(".pdf");
  async function submit(e) {
    let { data : {session} } = await supabase.auth.getSession()
    console.log(session.user.id)
    let myuuid = uuidv4();
    const file_name = session.user.id.concat('/').concat(filename).concat('.pdf')
    const { data, error } = await supabase
    .storage
    .from('forumNotes')
    .upload(file_name, file, {
        cacheControl: '3600',
        upsert: false
    })

    if (!error) {
        window.location.href = "/"
    }
  }
  
  return(
    <div>
  <input type="file" id="myFile" name="filename" onChange={(e)=> {setfile([e.target.files[0]])}}/>
    <input type="text" className="w-fit h-fit p-5" placeholder="thisvalueisshit" onChange={(e) => {setfilename(e.target.value)}}/>
  <button className="w-fit h-fit p-5" onClick={(e) => {submit()}}>submit</button>
</div>
  )
}