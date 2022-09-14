import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserReviewCard from "../UserReviewCard"

export default function UserProfile({user}) {

    const params = useParams() 

    const [username, setUsername] = useState('')
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`/users/${params.id}`)
            .then(r=>r.json())
            .then(data=>setUsername(data.username))
    }, [params.id])

    useEffect(() => {
        fetch(`/user_reviews/${params.id}`)
            .then(r=>r.json())
            .then(reviews=>setReviews(reviews))
    }, [params.id])
    
    const handleDelete = (reviewID) => {
        setReviews(reviews => reviews.filter(review => review.id !== reviewID))
      }

    const renderReviews = reviews.map(review => {return <UserReviewCard review={review} user={user} handleDelete={handleDelete}/>})

    return (
        <div>
            <h1>{username}</h1>
            {renderReviews}
        </div>
    )

}