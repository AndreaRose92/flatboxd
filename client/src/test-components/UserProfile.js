import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function UserProfile() {

    const params = useParams() 

    const [userData, setUserData] = useState({})

    useEffect(() => {
        fetch(`/users/${params.id}`).then(r=>r.json()).then(data=>setUserData(data))
    }, [params.id])

    return (
        <div>
            <p>{userData.username}</p>
        </div>
    )

}