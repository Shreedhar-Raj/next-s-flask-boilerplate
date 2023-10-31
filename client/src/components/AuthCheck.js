
const {data} = fetch('/api/auth/getSession').then(
res => res.json()
)
.then(data => {
if (data.status === 401 ) {
    window.location.href = '/login'
    
}
})

// copy paste this at the top of all the restricted route files some will also have to check premium role etc.. but this is the basic one for session the rest shall be done


// also there was no merge conflict