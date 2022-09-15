import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserReviewCard from "../UserReviewCard"

export default function UserProfile({user}) {

    const params = useParams() 

    const [userData, setUserData] = useState({})
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`/users/${params.id}`)
            .then(r=>r.json())
            .then(userData=>setUserData(userData))
    }, [params.id])

    useEffect(() => {
        fetch(`/user_reviews/${params.id}`)
            .then(r=>r.json())
            .then(reviews=>setReviews(reviews))
    }, [params.id])
    
    const handleDelete = (reviewID) => {
        setReviews(reviews => reviews.filter(review => review.id !== reviewID))
      }

    const sortedReviews = [...reviews].sort((a,b)=> new Date(b.updated_at) - new Date(a.updated_at))

    const renderReviews = sortedReviews.map(review => {return <UserReviewCard key={review.id} review={review} user={user} handleDelete={handleDelete}/>})

    return (
        <div>
            <img src={userData.avatar} alt={userData.username}/>
            <h1>{userData.username}</h1>
            {renderReviews}
        </div>
    )

}