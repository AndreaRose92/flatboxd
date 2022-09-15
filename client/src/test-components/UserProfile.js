import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserReviewCard from "../UserReviewCard"

export default function UserProfile({user, forceLogin}) {

    
    const params = useParams() 
    
    const [userData, setUserData] = useState({})
    const [reviews, setReviews] = useState([])
    // const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch(`/users/${params.id}`)
            .then(r=>{
                if (r.ok) {
                    r.json().then(userData=>setUserData(userData))
                }
                else {
                    r.json().then(()=>forceLogin())
                }
            })
    }, [params.id, forceLogin])
    
    useEffect(() => {
        fetch(`/user_reviews/${params.id}`)
        .then(r=>{
            if (r.ok) {
                r.json().then(reviews=>setReviews(reviews))
            }
            else {
                r.json().then(()=>forceLogin())
            }
        })
}, [params.id, forceLogin])
    
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