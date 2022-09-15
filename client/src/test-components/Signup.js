import { useState } from "react"
import { useHistory } from "react-router-dom"

export default function Signup({handleLogin}) {
    
    const history = useHistory()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
            })
        })
            .then(r=>r.json())
            .then(newUser=>{handleLogin(newUser); history.push(`/${newUser.id}`)})
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form name='login' onSubmit={e=>handleSubmit(e)}>
                <input type='text' placeholder='username' name='username' onChange={e => setUsername(e.target.value)}/><br/>
                <input type='password' placeholder='password' name='password' onChange={e => setPassword(e.target.value)}/><br/>
                <input type='password' placeholder='repeat password' name='password_confirmation' onChange={e => setPasswordConfirmation(e.target.value)}/><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}