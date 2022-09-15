import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"

export default function EditReview() {
    
    const history = useHistory() 
    const params = useParams()

    const [content, setContent] = useState('')
	const [rating, setRating] = useState(0)
	const [completed, setCompleted] = useState(0)

    const handleCheck = () => {
		if (completed === 0 || completed === false) {
			setCompleted(true)
		} else {
			setCompleted(0)
		}
	}

    useEffect(() => {
        fetch(`/reviews/${params.review_id}`)
            .then(r=>r.json())
            .then(data=>{setContent(data.content); setRating(data.rating); setCompleted(data.completed)})
    }, [params.review_id])

    // const handleInput = e => {
    //     let formName = e.target.name
    //     let formValue = e.target.value
    //     setReview({
    //         ...review,
    //         [formName]: formValue
    //     })
    // }

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(review)
        fetch(`/reviews/${params.review_id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                content,
                rating,
                completed
            })
        })
            .then(r=>r.json)
            .then(()=>history.push(`/${params.id}`))
    }

    const showCheckbox = completed ? <h2>You finished the game!</h2> : <label htmlFor='completed'>Completed?<input type='checkbox' name='completed' onChange={handleCheck}/></label>  

    return (
        <div>
            <form onSubmit={handleSubmit}>
				<h2>Leave a Review:</h2>
				<label htmlFor='content'>Content:
					<textarea name='content' onChange={e=>setContent(e.target.value)} value={content}/>
				</label><br/>
				<label htmlFor='rating'>Rating:
					<input type='number' name='rating' onChange={e=>setRating(e.target.value)} value={rating}/>
				</label><br/>
                {showCheckbox}<br/>
				{/* <label htmlFor='completed'>Completed?
					<input type='checkbox' name='completed' onChange={handleCheck}/>
				</label><br/> */}
				<button type='submit'>Submit</button>
			</form>
        </div>
    )

}