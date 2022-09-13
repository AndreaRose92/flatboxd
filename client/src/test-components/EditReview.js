import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"

export default function EditReview() {
    
    const history = useHistory() 
    const params = useParams()

    const [review, setReview] = useState({
        content: '',
        user_id: null,
        game_id: null
    })

    useEffect(() => {
        fetch(`/reviews/${params.review_id}`)
            .then(r=>r.json())
            .then(data=>setReview(data))
    }, [])

    const handleInput = e => {
        let formName = e.target.name
        let formValue = e.target.value
        setReview({
            ...review,
            [formName]: formValue
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch(`/reviews/${params.review_id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({review})
        })
            .then(r=>r.json)
            .then(()=>history.push(`/${params.id}/${params.review_id}`))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} name='review'>
                <input type='text' name='content' value={review.content} onChange={handleInput}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}