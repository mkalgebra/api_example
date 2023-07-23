import "./UserCard.css";
import { useNavigate } from "react-router-dom";

export default function UserCard({user}){
    const {name, email, username, website, id} = user

    const navigate = useNavigate()

    function openSinglePost(){
        navigate(`/users/${id}`)
    }

    return(
    <>
        <div className="c-user-card" onClick={openSinglePost}>
            <p>
                <b>Name:</b> {name}
            </p>
            <p>
                <b>Email:</b> {email}
            </p>
            <p>
                <b>Username:</b> {username}
            </p>
            <p>
                <b>Website:</b> {website}
            </p>
        </div>
    </>)
}