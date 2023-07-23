import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UserProfile(){
    const [user, setUser] = useState();

    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>res.json())
        .then(user=>setUser(user))
    }, [])

    if(!user){
        return<><span>Loading...</span></>
    }

    return(
        <>
            <div>
                <span>Ja sam {user.name}</span>
            </div>
        </>
    )
}