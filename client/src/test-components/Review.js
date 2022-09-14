import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Review() {

    const params = useParams()
    const [review, setReview] = useState({})
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])

    useEffect(() => {
        fetch(`/reviews/${params.review_id}`)
            .then(r=>r.json())
            .then(data=>{setReview(data); setComments(data.comments); setLikes(data.likes)})
    }, [])

    // console.log(review.likes.length)
    // console.log(comments)

    

    const renderComments = comments.map(c => {
        return (
            <div key={c.id}>
                <p>{c.comment_body}</p>
            </div>
        )
    })

    return (
        <div>
            <h3>{review.content}</h3>
            <h4>{review.rating}</h4>
            {renderComments}
            <h4>{likes.length}</h4>
            <Link to={`/${params.id}/${review.id}/edit`}>
                Edit
            </Link>
        </div>
    )
}