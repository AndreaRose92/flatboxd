import { useState } from "react"
import { useHistory } from "react-router-dom"

export default function Login() {

    const history = useHistory()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleInput = (e) => {
        let formName = e.target.name
        let formValue = e.target.value
        setFormData({
            ...formData,
            [formName]: formValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({formData})
        })
            .then(r=>r.json())
            .then(()=>history.push('/games'))
    }

    return (
        <div>
            <h1>Login</h1>
            <form name='login' onSubmit={e=>handleSubmit(e)}>
                <input type='text' placeholder='username' name='username' onChange={handleInput}/><br/>
                <input type='text' placeholder='password' name='password' onChange={handleInput}/><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}