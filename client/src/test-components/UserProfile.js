import { useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"

export default function UserProfile() {

    const params = useParams() 
    const history = useHistory()

    const [username, setUsername] = useState('')
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`/users/${params.id}`)
            .then(r=>r.json())
            .then(data=>{setUsername(data.username); setReviews(data.reviews)})
            // .then(data=>console.log(data))
    }, [])

    // console.log(userData.reviews)

    const renderReviews = reviews.map(review => {
        return (
            <div key={review.id}>
                <Link to={`/${params.id}/${review.id}`}>
                    <p>{review.content}</p>
                </Link>
                <p>{review.rating}</p>
                <p>{review.completed ? 'Completed' : "I'm a poser :("}</p>
            </div>
        )
    })
    
    const logout = () => {
        fetch('/logout', {
            method: "DELETE"
        })
            .then(()=>history.push('/login'))
    }

    

    return (
        <div>
            <h1>{username}</h1>
            <button onClick={logout}>Logout</button>
            {renderReviews}
        </div>
    )

}