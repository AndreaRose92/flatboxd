import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Error } from "./Styles/Error.Styles"

export default function Signup({handleLogin}) {
    
    const history = useHistory()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [avatar, setAvatar] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                avatar,
                admin: false
            })
        }).then(r=>{
            if (r.ok) {
                r.json().then(newUser=>{handleLogin(newUser); history.push(`/users/${newUser.id}`)})
            } else {
                r.json().then(err=>setErrors([err]))
            }
        }
    )}

    return (
        <div>
            <h1>Sign Up</h1>
            <form name='login' onSubmit={e=>handleSubmit(e)}>
                <input autoComplete="off" type='text' placeholder='username' name='username' onChange={e => setUsername(e.target.value)}/><br/>
                <input autoComplete="off" type='text' placeholder='avatar url' name='avatar' onChange={e => setAvatar(e.target.value)}/><br/>
                <input autoComplete="off" type='password' placeholder='password' name='password' onChange={e => setPassword(e.target.value)}/><br/>
                <input autoComplete="off" type='password' placeholder='repeat password' name='password_confirmation' onChange={e => setPasswordConfirmation(e.target.value)}/><br/>
                <button type='submit'>Submit</button>
                {errors.map(err=>(
                    <Error key={err}>{err.error}</Error>
                ))}
            </form>
        </div>
    )
}