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
    
    const renderReviews = reviews.map(review => {return <UserReviewCard review={review} user={user} handleDelete={handleDelete}/>})
    
    console.log(userData)
    
    
    // useEffect(()=>{forceLogin()},[forceLogin])
    
    return (
        <div>
            <img src={userData.avatar} alt={userData.username}/>
            <h1>{userData.username}</h1>
            {renderReviews}
        </div>
    )

}