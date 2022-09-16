import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Error } from "./Styles/Error.Styles"

export default function Login({ handleLogin }) {

    const history = useHistory()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                password
            })
        }).then(r=>{
            if (r.ok) {
                r.json().then(user=>{handleLogin(user); history.push(`/users/${user.id}`)})
            } else {
                r.json().then(err=>setErrors([err]))
                // r.json().then(err=>console.log([err.error]))
            }
        }
    )}

    return (
        <div>
            <h1>Login</h1>
            <form name='login' onSubmit={e=>handleSubmit(e)}>
                <input autoComplete="off" type='text' placeholder='username' name='username' onChange={e=>setUsername(e.target.value)}/><br/>
                <input autoComplete="off" type='password' placeholder='password' name='password' onChange={e=>setPassword(e.target.value)}/><br/>
                <button type='submit'>Submit</button>
                {errors.map(err=>(
                    <Error key={err}>
                        {err.error} 
                    </Error>
                ))}
            </form>
        </div>
    )
}