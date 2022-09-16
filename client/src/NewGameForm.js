import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Error } from "./Styles/Error.Styles"

export default function NewGameForm({user}) {

    const history = useHistory()

    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [platform, setPlatform] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        if (!user) {user = {id: 0}}
        fetch('/games', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title,
                genre,
                platform,
                image_url: imageUrl,
                user_id: user.id
            })
        }).then(r=>{
            if (r.ok) {
              r.json().then(()=>history.push('/games'))
            } else {
                // r.json().then((err)=>console.log(err))
                r.json().then((err)=>setErrors([err]))
            }
        })
    }

    return (
        <div>
            <h1>Submit a Game</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' placeholder="title" onChange={e=>setTitle(e.target.value)} /><br/>
                <input type='text' name='genre' placeholder="genre" onChange={e=>setGenre(e.target.value)} /><br/>
                <input type='text' name='platform' placeholder="platform(s)" onChange={e=>setPlatform(e.target.value)} /><br/>
                <input type='text' name='image' placeholder="image url" onChange={e=>setImageUrl(e.target.value)} /><br/>
                <button type='submit'>Submit</button>
                {errors.map((err)=>(
                    <Error key={err}>{err.error}</Error>
                ))}
            </form>
        </div>
    )

}