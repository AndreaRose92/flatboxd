import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function UserProfile() {

    const params = useParams() 

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
                <p>{review.content}</p>
                <p>{review.rating}</p>
                <p>{review.completed}</p>
            </div>
        )
    })
    
    return (
        <div>
            <h1>{username}</h1>
            {renderReviews}
        </div>
    )

}