import React ,{useEffect,useState} from 'react'

function UserProfile() {
    const [user,setUser] = useState(null)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response=>response.json())
        .then(data=>setUser(data))
    },[])
    if(!user)
        return <div>Loading user data....</div>
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    )
}

export default UserProfile